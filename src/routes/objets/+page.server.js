
const url = `https://artisans.stagingserver.fr/api/objets`;

const reponse =  await fetch(url)
const objets = await reponse.json();

export function load({ params }) {
	return {
		objets
	};
}
