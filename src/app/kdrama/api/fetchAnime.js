export async function fetchAnimeInfo(title) {
	const res = await fetch(
		"https://v1.api.ani.rohi.dev/movies/dramacool/" + title
	);
	const data = await res.json();
	return data;
}

export async function fetchDramaInfo(id) {
	const res = (
		await fetch(
			`https://v1.api.ani.rohi.dev/movies/dramacool/info?id=${id}`
		)
	).json();
	return res;
}

export async function fetchVideoLinks(drama_id, episode_id) {
	const res = (
		await fetch(
			`https://v1.api.ani.rohi.dev/movies/dramacool/watch?episodeId=${episode_id}&mediaId=${drama_id}`
		)
	).json();
	return res;
}
