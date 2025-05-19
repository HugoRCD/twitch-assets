import { H3Event } from 'h3'
import { z } from 'zod'

const USERS_SCHEMA = z.object({
  data: z.array(z.object({
    id: z.string(),
    login: z.string(),
    display_name: z.string(),
    type: z.string(),
    broadcaster_type: z.string(),
    description: z.string(),
    profile_image_url: z.string(),
    offline_image_url: z.string(),
    view_count: z.number(),
    created_at: z.string(),
  })),
})

const STREAMS_SCHEMA = z.object({
  data: z.array(z.object({
    id: z.string(),
    user_id: z.string(),
    user_login: z.string(),
    user_name: z.string(),
    game_id: z.string(),
    game_name: z.string(),
    type: z.string(),
    title: z.string(),
    viewer_count: z.number(),
    started_at: z.string(),
    language: z.string(),
    thumbnail_url: z.string(),
    tag_ids: z.array(z.string()).optional(),
    is_mature: z.boolean(),
  })),
  pagination: z.object({
    cursor: z.string().optional(),
  }).optional(),
})

type GetAccessTokenParams = {
  clientId: string;
  clientSecret: string;
};

async function getAccessToken({
  clientId,
  clientSecret,
}: GetAccessTokenParams): Promise<string> {
  const body = new FormData()
  body.append('client_id', clientId)
  body.append('client_secret', clientSecret)
  body.append('grant_type', 'client_credentials')

  try {
    const result = await $fetch<any>('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      body,
    })
    return result.access_token as string
  } catch (e) {
    console.log(e)
    throw createError({
      status: 500,
      message: 'Error getting access token',
    })
  }
}

async function fetchTwitchUserAndStream(event: H3Event) {
  const { clientId, clientSecret } = useRuntimeConfig(event).twitch
  const accessToken = await getAccessToken({ clientId, clientSecret })
  const login = 'hugo_rcd'

  // Fetch user info
  const userRaw = await $fetch('https://api.twitch.tv/helix/users', {
    query: { login },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-Id': clientId,
    },
  })
  const userParsed = USERS_SCHEMA.parse(userRaw)
  const user = userParsed.data[0] ?? null

  // Fetch stream info
  const streamRaw = await $fetch('https://api.twitch.tv/helix/streams', {
    query: { user_login: login, first: 1 },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-Id': clientId,
    },
  })
  const streamParsed = STREAMS_SCHEMA.parse(streamRaw)
  const stream = streamParsed.data[0] ?? null

  return { user, stream }
}

export default defineEventHandler(async (event) => {
  return await fetchTwitchUserAndStream(event)
}) 
