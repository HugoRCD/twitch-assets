import { Socket, createConnection } from 'net'
import { parse } from 'irc-message'
import { useRuntimeConfig } from '#imports'
import type { ChatMessage } from '~/types/chat'

function parseBadges(badgesStr: string | undefined): Record<string, string> {
  if (!badgesStr) return {}
  return badgesStr.split(',').reduce((acc, badge) => {
    const [name, version] = badge.split('/')
    if (name && version) acc[name] = version
    return acc
  }, {} as Record<string, string>)
}

function parseEmotes(emotesStr: string | undefined): Record<string, string[]> {
  if (!emotesStr || emotesStr === '') return {}
  try {
    return JSON.parse(emotesStr) 
  } catch {
    return {} 
  }
}

let ircClient: Socket | null = null
let ircConnected = false
const wsClients: Set<any> = new Set()

function connectToTwitchChat(broadcast: (msg: ChatMessage) => void) {
  if (ircConnected && ircClient) return
  const { twitch } = useRuntimeConfig()
  const { clientId, oauthToken } = twitch
  if (!oauthToken) return

  if (!ircClient) {
    ircClient = createConnection(6667, 'irc.chat.twitch.tv', () => {
      ircConnected = true
      ircClient!.write(`PASS ${oauthToken}\r\n`)
      ircClient!.write(`NICK ${clientId}\r\n`)
      ircClient!.write('CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands\r\n')
      ircClient!.write('JOIN #hugo_rcd\r\n')
    })
  }
  ircClient.removeAllListeners('data')
  ircClient.on('data', (data: Buffer) => {
    const rawMessage = data.toString()
    const messages = rawMessage.split('\r\n')
    for (const message of messages) {
      if (!message) continue
      const parsed = parse(message)
      if (!parsed) continue
      if (parsed.command === 'PRIVMSG') {
        const chatMessage: ChatMessage = {
          username: parsed.tags?.['display-name'] || parsed.prefix?.split('!')[0] || '',
          message: parsed.params?.[1] || '',
          timestamp: new Date().toISOString(),
          badges: parseBadges(parsed.tags?.['badges']),
          color: parsed.tags?.['color'],
          rawEmotes: parsed.tags?.['emotes'] || ''
        }
        broadcast(chatMessage)
      }
      if (parsed.command === 'PING' && ircClient) {
        ircClient.write('PONG :tmi.twitch.tv\r\n')
      }
    }
  })
  ircClient.removeAllListeners('error')
  ircClient.on('error', () => {
    ircConnected = false
    setTimeout(() => connectToTwitchChat(broadcast), 5000)
  })
  ircClient.removeAllListeners('close')
  ircClient.on('close', () => {
    ircConnected = false
    setTimeout(() => connectToTwitchChat(broadcast), 5000)
  })
}

export default defineWebSocketHandler({
  open(peer) {
    wsClients.add(peer)
    if (wsClients.size === 1) {
      connectToTwitchChat((msg) => {
        for (const client of wsClients) {
          client.send(JSON.stringify(msg))
        }
      })
    }
  },
  close(peer) {
    wsClients.delete(peer)
  }
}) 
