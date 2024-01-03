'use client'
import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import SpotifyAuth from './SpotifyAuth'
export default function SpotifyComponent({ username }) {
	const loginUsingSpotifyWebApi = () => {
		const spotifyApi = new SpotifyWebApi()
		const clientId = process.env.SPOTIFY_CLIENT_ID
		const redirectUri = 'http://localhost:3000'

		// Define the required scope for accessing the user's liked tracks
		const scope = 'user-library-read'

		// Build the authentication URL
		const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`
		window.open(authUrl)
	}
	return (
		<div className="bg-zinc-800 mx-2 p-4 rounded-xl flex flex-col gap-2">
			<p>Spotify Liked Tracks</p>
			{username ? <p>Username: {username}</p> : <SpotifyAuth />}
		</div>
	)
}
