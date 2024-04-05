
const artisansURL = `https://artisans.stagingserver.fr/api/ateliers?populate=*`;

const reponse =  await fetch(artisansURL)
const ateliers = await reponse.json();

const repHomepage = await fetch('https://artisans.stagingserver.fr/api/accueil?populate[ateliers]=*')
const accueil = await repHomepage.json();

export function load({ params }) {
	return {
		ateliers,
		accueil
	};
}
