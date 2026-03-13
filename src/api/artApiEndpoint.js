import nookipediaClient from '@/api/NookipediaApi'

export const getAllArts = async () => {
	try {
		const response = await nookipediaClient.get("/nh/art");
		return response.data
	} catch (error) {
		return {}
	}
}

export const getOneArt = async (artName) => {
	try {
		const response = await nookipediaClient.get(`/nh/art/${artName}`);
		return response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}