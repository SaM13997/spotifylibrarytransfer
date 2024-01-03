// pages/index.js
import SpotifyWebApi from 'spotify-web-api-js'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
	const [status, setStatus] = useState('')
	const [userID, setUserID] = useState('')
	let accessToken
	if (typeof window === 'object') {
		accessToken = new URLSearchParams(window.location.hash).get('#access_token')
	}

	const spotifyApi = new SpotifyWebApi()
	useEffect(() => {
		// Set the access token on the Spotify API object
		console.log(accessToken)
	}, [accessToken])

	const handleUserIDChange = (event) => {
		setUserID(event.target.value)
	}
	const handleLogin = async () => {
		try {
			const authResponse = await axios.post('/api/login')
			console.log(authResponse)
			window.location.href = authResponse.data.authUrl
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="flex bg-red-600 flex-col">
			{/* <button onClick={handleLogin}>Login</button>
			<h1>Spotify Liked Songs Copier</h1>
			<button>Copy Liked Songs</button>
			<input
				type="text"
				name="userID"
				id="userID"
				onChange={handleUserIDChange}
				value={userID}
				placeholder="Enter your user ID"
			/>
			<p>{status}</p> */}
		</div>
	)
}
