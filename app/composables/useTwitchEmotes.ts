interface EmotePosition {
  id: string
  start: number
  end: number
}

export function parseTwitchEmotes(emotesTag: string | undefined, message: string) {
  if (typeof emotesTag !== 'string' || emotesTag === '') return [{ text: message }]
  const emotes: { id: string; positions: [number, number][] }[] = []
  const emoteParts = emotesTag.split('/')
  for (const part of emoteParts) {
    const [id, positions] = part.split(':')
    if (!id || !positions) continue
    emotes.push({
      id,
      positions: positions.split(',').map(pos => {
        const [start, end] = pos.split('-').map(Number)
        return [start, end] as [number, number]
      })
    })
  }
  const result: { text: string; emoteId?: string }[] = []
  let lastIndex = 0
  for (const emote of emotes) {
    for (const [start, end] of emote.positions) {
      if (lastIndex < start) {
        result.push({ text: message.slice(lastIndex, start) })
      }
      result.push({ text: message.slice(start, end + 1), emoteId: emote.id })
      lastIndex = end + 1
    }
  }
  if (lastIndex < message.length) {
    result.push({ text: message.slice(lastIndex) })
  }
  return result
}

export function getTwitchEmoteUrl(emoteId: string, size: 1 | 2 | 3 = 1) {
  return `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/dark/${size}.0`
} 
