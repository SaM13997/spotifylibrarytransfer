import React from 'react'

export function Home() {
	return (
		<div className="">
			<p className="text-4xl">Spotify Library Transfer</p>
			<div>
				<div>
					<p>Spotify Source Account</p>
					<p>Username: {username}</p>
				</div>
				<div>
					<p>Spotify Destination Account</p>
					<p>Username: {username}</p>
				</div>
			</div>
		</div>
	)
}
