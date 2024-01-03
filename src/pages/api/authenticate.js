// pages/api/authenticate.js

import axios from 'axios'

export default async function handler(_, res) {
	try {
		const authResponse = await axios.post(
			'https://accounts.spotify.com/api/token',
			null,
			{
				params: {
					grant_type: 'client_credentials',
				},
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Basic ' +
						Buffer.from(
							`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
						).toString('base64'),
				},
			}
		)

		res.status(200).json(authResponse.data)
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
