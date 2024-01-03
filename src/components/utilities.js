const authAndGetLikedSongs = async (spotifyApi) => {
	try {
		spotifyApi.setAccessToken(accessToken)

		spotifyApi
			.getMySavedTracks()
			.then((response) => {
				const songs = response.items.map((item) => ({
					id: item.track.id,
					name: item.track.name,
					artist: item.track.artists.map((artist) => artist.name).join(', '),
				}))
				setLikedSongs(songs)
				console.log({ songs })
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	} catch (error) {
		console.log(error)
	}
}
