<script>
    import ListeAteliers from '$lib/Components/ListeAteliers.svelte';
    import { onMount } from 'svelte';
    let ateliers
    
    onMount( async () => {
        const url = `https://artisans.stagingserver.fr/api/ateliers`;
        const reponse =  await fetch(url)
        ateliers = await reponse.json();
    })

</script>

<footer>
    <div class="alignement">
      <a href="/" class="raccourci-menu">
        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 16.5H11.5398L11.5 11.7289L11.5896 11.7018L11.6194 11.6116L11.709 11.5846L11.7488 11.5665L11.7687 11.5304L11.8184 11.5124C11.4005 10.7037 11.1478 8.969 13.4801 8.5C15.8204 9.07001 15.5498 10.7458 15.1219 11.5124L15.1716 11.5395L15.2214 11.5936L15.3109 11.6297L15.3706 11.6838L15.3905 11.7289L15.5 11.7559V16.5Z" stroke="white"/>
        <path d="M27.5 16.5H23.5398L23.5 11.7289L23.5896 11.7018L23.6194 11.6116L23.709 11.5846L23.7488 11.5665L23.7687 11.5304L23.8184 11.5124C23.4005 10.7037 23.1478 8.969 25.4801 8.5C27.8204 9.07001 27.5498 10.7458 27.1219 11.5124L27.1716 11.5395L27.2214 11.5936L27.3109 11.6297L27.3706 11.6838L27.3905 11.7289L27.5 11.7559V16.5Z" stroke="white"/>
        <path d="M39.5 16.5H35.5398L35.5 11.7289L35.5896 11.7018L35.6194 11.6116L35.709 11.5846L35.7488 11.5665L35.7687 11.5304L35.8184 11.5124C35.4005 10.7037 35.1478 8.969 37.4801 8.5C39.8204 9.07001 39.5498 10.7458 39.1219 11.5124L39.1716 11.5395L39.2214 11.5936L39.3109 11.6297L39.3706 11.6838L39.3905 11.7289L39.5 11.7559V16.5Z" stroke="white"/>
        <path d="M15.5 27.5H11.5398L11.5 22.7289L11.5896 22.7018L11.6194 22.6116L11.709 22.5846L11.7488 22.5665L11.7687 22.5304L11.8184 22.5124C11.4005 21.7037 11.1478 19.969 13.4801 19.5C15.8204 20.07 15.5498 21.7458 15.1219 22.5124L15.1716 22.5395L15.2214 22.5936L15.3109 22.6297L15.3706 22.6838L15.3905 22.7289L15.5 22.7559V27.5Z" stroke="white"/>
        <path d="M27.5 27.5H23.5398L23.5 22.7289L23.5896 22.7018L23.6194 22.6116L23.709 22.5846L23.7488 22.5665L23.7687 22.5304L23.8184 22.5124C23.4005 21.7037 23.1478 19.969 25.4801 19.5C27.8204 20.07 27.5498 21.7458 27.1219 22.5124L27.1716 22.5395L27.2214 22.5936L27.3109 22.6297L27.3706 22.6838L27.3905 22.7289L27.5 22.7559V27.5Z" stroke="white"/>
        <path d="M39.5 27.5H35.5398L35.5 22.7289L35.5896 22.7018L35.6194 22.6116L35.709 22.5846L35.7488 22.5665L35.7687 22.5304L35.8184 22.5124C35.4005 21.7037 35.1478 19.969 37.4801 19.5C39.8204 20.07 39.5498 21.7458 39.1219 22.5124L39.1716 22.5395L39.2214 22.5936L39.3109 22.6297L39.3706 22.6838L39.3905 22.7289L39.5 22.7559V27.5Z" stroke="white"/>
        </svg>
    </a>
      <div class="separation"><svg width="2" height="36" viewBox="0 0 2 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Ligne S&#195;&#169;paration">
        <line id="Line 4" x1="1" y1="0.5" x2="1" y2="35.5" stroke="white"/>
        </g>
        </svg>
      </div>


      <ListeAteliers {ateliers} />


        <div class="boxlogo">
            <img class="logo" src="/images/Logo_blanc.png" alt=""/>
        </div>

    </div>
</footer>

<style>


footer {
  display: flex ;
  padding-top : 16px;
  padding-bottom: 16px;
  flex-direction: row ;
  justify-content: left;
  position: fixed; 
  left : 3vw;
  right: 3vw;
  bottom : 20px;
  flex-shrink: 0;
  width: 100%;
  height: 88px;
  gap: 8px;
  z-index: 2;
}
.alignement {
  display: flex;
  vertical-align : center;
}

.alignement * {
    box-sizing: border-box;
  }

.raccourci-menu {
  border-radius: 20px;
  border-style: solid;
  border-color: #ffffff;
  background: (217, 217, 217, 0.00);
  border-width: 1px;
  padding: 8px 10px 8px 10px;
  margin-top : 25px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 35px;
  position: relative;
  overflow: hidden;
}

.separation {
  padding: 8px 20px 8px 20px;
  margin-top: 25px;
  margin-right: 1px;
  margin-left: 1px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 35px;
  position: relative;
  overflow: hidden;
}

.boxlogo {
  width: 400px ;
  height: 88px;
  margin-left: 230px ;
}

.logo {
  width: 80px;
  height: 88px;
}

</style>

