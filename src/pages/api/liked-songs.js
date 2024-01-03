// pages/api/liked-songs.js

import axios from 'axios'

export default async function handler(req, res) {
	try {
		// const accessToken = req.headers.authorization.replace('Bearer ', '')

		const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
			headers: {
				Authorization: req.headers.authorization,
			},
		})
		console.log(response.data)

		res.status(200).json(response.data)
	} catch (error) {
		res.json({ error })
	}
}
