



export async function load({ params }) {

    let populate = `populate[objets][populate]=*&populate[IllustrationAtelier][populate]=*`
    
    // populate[objets][populate][0]=qcms&populate[objets][populate][1]=POI&populate[objets][populate][2]=visuelObjet2d&populate[IllustrationAtelier][populate]=*

    const url = `https://artisans.stagingserver.fr/api/ateliers?${populate}`;
    const rep1 =  await fetch(url)
    const ateliers = await rep1.json();

    const artisansURL = `https://artisans.stagingserver.fr/api/ateliers/${params.id}?populate[objets][populate][0]=qcms&populate[objets][populate][1]=POI&populate[objets][populate][2]=visuelObjet2d&populate[IllustrationAtelier][populate]=*&populate[illustrationArtisan][populate]=*&populate[Vignettepersonnage][populate]=*&populate[Textepresentation][populate]=*`;
    const rep2 = await fetch(artisansURL)
    const atelier = await rep2.json();

	return {
		atelier,
        ateliers
	};
}
