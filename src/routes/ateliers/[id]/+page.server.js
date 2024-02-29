



export async function load({ params }) {

    let populate = `populate[objet_3_ds][populate]=*&populate[IllustrationAtelier][populate]=*`

    const url = `https://artisans.stagingserver.fr/api/ateliers?${populate}`;
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
