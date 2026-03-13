import nookipediaClient from '@/api/NookipediaApi'

export const getAllGyroids = async () => {
	try {
		const response = await nookipediaClient.get("/nh/gyroids");
		return response.data
	} catch (error) {
		return {}
	}
}

export const getOneGyroid = async (gyroidName) => {
	try {
		const response = await nookipediaClient.get(`/nh/gyroids/${gyroidName}`);
		return response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}