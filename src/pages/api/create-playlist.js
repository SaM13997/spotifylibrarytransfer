// pages/api/create-playlist.js

import axios from 'axios'

export default async function handler(req, res) {
	try {
		const { userId, playlistName, accessToken } = req.body

		const response = await axios.post(
			`https://api.spotify.com/v1/users/${userId}/playlists`,
			{ name: playlistName, public: true },
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		res.status(200).json(response.data)
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
