
const artisansURL = `https://artisans.stagingserver.fr/api/ateliers`;

const reponse =  await fetch(artisansURL)
const ateliers = await reponse.json();

export function load({ params }) {
	return {
		ateliers
	};
}
