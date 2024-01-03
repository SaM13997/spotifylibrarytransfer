import React from 'react'
import SpotifyComponent from '../components/SpotifyComponent'

function Home() {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-4xl">Spotify Library Transfer</p>
			<div className="flex items-center justify-center ">
				<SpotifyComponent />
				<SpotifyComponent />
			</div>
		</div>
	)
}

export default Home
