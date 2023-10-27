// https://luigicruz.dev/blog/using-spotify-api
import querystring from 'querystring'

const client_id = import.meta.env.SPOTIFY_CLIENT_ID
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()
  const res = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.json()
}

const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`
export const getTopArtists = async (time_range = "medium_term") => {
  const { access_token } = await getAccessToken()
  const res = await fetch(`${TOP_ARTISTS_ENDPOINT}?time_range=${time_range}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.json()
}