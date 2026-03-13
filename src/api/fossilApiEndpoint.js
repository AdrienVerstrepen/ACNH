import nookipediaClient from '@/api/NookipediaApi'

export const getAllFossils = async () => {
	try {
		const response = await nookipediaClient.get("/nh/fossils/individuals");
		return response.data
	} catch (error) {
		return {}
	}
}

export const getOneFossil = async (fossilName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fossils/individuals/${fossilName}`);
		return response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}