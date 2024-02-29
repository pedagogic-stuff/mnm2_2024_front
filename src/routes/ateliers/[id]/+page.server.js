



export async function load({ params }) {

    const url = `https://artisans.stagingserver.fr/api/ateliers`;
    const rep1 =  await fetch(url)
    const ateliers = await rep1.json();

    const artisansURL = `https://artisans.stagingserver.fr/api/ateliers/${params.id}?populate=*`;
    const rep2 = await fetch(artisansURL)
    const atelier = await rep2.json();

	return {
		atelier,
        ateliers
	};
}
