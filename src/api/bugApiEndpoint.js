import nookipediaClient from '@/api/NookipediaApi'

export const getAllBugs = async () => {
	try {
		const response = await nookipediaClient.get("/nh/bugs");
		return response.data
	} catch (error) {
		return {}
	}
}

export const getOneBug = async (bugName) => {
	try {
		const response = await nookipediaClient.get(`/nh/bugs/${bugName}`);
		return response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}