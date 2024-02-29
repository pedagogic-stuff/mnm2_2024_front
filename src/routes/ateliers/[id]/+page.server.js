

let artisansURL = `https://artisans.stagingserver.fr/api/ateliers`;


export async function load({ params }) {
    artisansURL += `/${params.id}`;
    
    const reponse = await fetch(artisansURL)
    const atelier = await reponse.json();

    console.log(atelier)
	return {
		atelier
	};
}
