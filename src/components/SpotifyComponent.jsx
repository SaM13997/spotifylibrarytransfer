import React from 'react'
export default function SpotifyComponent({ username }) {
	return (
		<div className="bg-zinc-800 mx-2 p-4 rounded-xl flex flex-col gap-2">
			<p>Spotify Destination Account</p>
			{username ? (
				<p>Username: {username}</p>
			) : (
				<button className="bg-zinc-600 rounded-xl p-2">Login</button>
			)}
		</div>
	)
}
