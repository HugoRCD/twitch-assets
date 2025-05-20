export interface ChatMessage {
  username: string
  message: string
  timestamp: string
  badges: Record<string, string>
  emotes?: Record<string, string[]>
  color?: string
  rawEmotes?: string
}

export interface BadgeSets {
  [badge: string]: {
    versions: {
      [version: string]: {
        image_url_1x: string
        image_url_2x: string
        image_url_4x: string
      }
    }
  }
} 
