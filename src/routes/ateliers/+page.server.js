
const url = `https://artisans.stagingserver.fr/api/ateliers`;

const reponse =  await fetch(url)
const ateliers = await reponse.json();

export function load({ params }) {
	return {
		ateliers
	};
}

export const actions = {
	pickObject: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');

        let populate = `populate[qcms][populate]=*&populate[POI][populate]=*&populate[Fichier3d]=*&populate[CarteZone]=*`
        const url = `https://artisans.stagingserver.fr/api/objets/${id}?${populate}`;
        const reponse =  await fetch(url);
		const objet = await reponse.json()
        return objet;
	}
};