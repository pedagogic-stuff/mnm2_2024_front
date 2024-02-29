
const url = `https://artisans.stagingserver.fr/api/ateliers`;

const reponse =  await fetch(url)
const ateliers = await reponse.json();

export function load({ params }) {
	return {
		ateliers
	};
}
