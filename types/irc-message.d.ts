declare module 'irc-message' {
  interface TwitchIRCMessage {
    command: string
    params: string[]
    prefix?: string
    tags?: Record<string, string>
  }

  export function parse(message: string): TwitchIRCMessage | null
} 
