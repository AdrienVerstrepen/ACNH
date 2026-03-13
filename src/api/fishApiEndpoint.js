import nookipediaClient from '@/api/NookipediaApi'

export const getAllFishes = async () => {
	try {
		const response = await nookipediaClient.get("/nh/fish");
		return response.data
	} catch (error) {
		return {}
	}
}

export const getOneFish = async (fishName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fish/${fishName}`);
		return response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}