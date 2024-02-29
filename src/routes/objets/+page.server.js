
const url = `https://artisans.stagingserver.fr/api/objet3-ds`;

const reponse =  await fetch(url)
const objets = await reponse.json();

export function load({ params }) {
	return {
		objets
	};
}
