import SpotifyWebApi from 'spotify-web-api-js'

export default async function handler(req, res) {
	try {
		const spotifyApi = new SpotifyWebApi()
		const clientId = process.env.SPOTIFY_CLIENT_ID
		const redirectUri = 'http://localhost:3000'

		// Define the required scope for accessing the user's liked tracks
		const scope = 'user-library-read'

		// Build the authentication URL
		const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`

		// Redirect the user to the authentication URL
		res.json({ authUrl })
	} catch (error) {
		res.json({ error })
	}
}
