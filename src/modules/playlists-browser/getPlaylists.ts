export const getPlaylists = async () => {
	try {
		const res = await fetch('/api/playlists');
		return res.json();
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] getPlaylists - error: ', err);
		}

		return null;
	}
};
