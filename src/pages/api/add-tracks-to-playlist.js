// pages/api/add-tracks-to-playlist.js

import axios from 'axios'

export default async function handler(req, res) {
	try {
		const { accessToken, playlistId, trackUris } = req.body

		await axios.post(
			`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
			{ uris: trackUris },
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		res.status(200).end()
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
