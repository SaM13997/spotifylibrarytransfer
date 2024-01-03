import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import axios from 'axios'

const SpotifyAuth = () => {
	const [spotifyApi, setSpotifyApi] = useState(null)
	const [likedSongs, setLikedSongs] = useState([])

	const handleLogin = async () => {
		try {
			const authResponse = await axios.post('/api/login')
			console.log(authResponse)
			window.location.href = authResponse.data.authUrl
		} catch (error) {
			console.log(error)
		}
	}

	const handleLogout = () => {
		setSpotifyApi(null)
	}
	useEffect(() => {
		const handleTokenExpiration = () => {
			// Implement token refresh logic if needed
			console.log('Token expired. Implement token refresh logic here.')
		}

		const checkLogin = async () => {
			const params = new URLSearchParams(window.location.hash.substring(1))
			const accessToken = params.get('access_token')

			if (accessToken) {
				const api = new SpotifyWebApi()
				api.setAccessToken(accessToken)

				// Set up token expiration check (e.g., refresh token logic)
				api.getMe().catch((error) => {
					if (error.status === 401) {
						handleTokenExpiration()
					}
				})
				const tracks = await api.getMySavedTracks()
				console.log({ tracks }, 'getMe')
				setLikedSongs(tracks.items.map((item) => item.track.name))
				setSpotifyApi(api)
			}
		}

		checkLogin()
	}, [])

	return (
		<div>
			{spotifyApi ? (
				<div>
					<p>You are logged in as {}</p>
					<button onClick={handleLogout}>Logout</button>
					{likedSongs.map((song) => (
						<p className="bg-slate-100 text-zinc-800 my-1">{song}</p>
					))}
				</div>
			) : (
				<button onClick={handleLogin}>Login with Spotify</button>
			)}
		</div>
	)
}

export default SpotifyAuth
