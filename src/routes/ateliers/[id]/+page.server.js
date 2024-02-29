



export async function load({ params }) {
    let artisansURL = `https://artisans.stagingserver.fr/api/ateliers/${params.id}?populate=*`;
    
    const reponse = await fetch(artisansURL)
    const atelier = await reponse.json();

    console.log(atelier)
	return {
		atelier
	};
}
