<header>
    <div class="headergrid banner">
      <div class="headeritems">
        <h1>
          <button class="boutonheader">Accueil</button>
        </h1>
      </div>
      <div class="headeritems maintitle">
        <h1>Trésors d'artisans</h1>
      </div>
      <div class="headeritems">
        <button class="boutonheader">Crédits</button>
      </div>
</header>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
  font-family: 'Zarid';
}
/* 
@font-face {
  font-family: "Fedra";
  src: url("Typos/FedraSansPro-Bold.ttf");
}

@font-face {
  font-family: "Fedra";
  font-weight: 300;
  src: url
}

@font-face {
  font-family: 'Zarid';
  src: url('Typos/ZaridSans-Regular.ttf')
}

@font-face {
  font-family: 'Zarid';
  font-weight : medium;
  src: url('Typos/ZaridSans-Medium.ttf');
}

@font-face {
  font-family: 'Zarid';
  font-weight : 300;
  src: url('Typos/ZaridSans-SemiBold.ttf') format(‘truetype’);
} */

.banner {
  height: 30px;
  width: 100%;
  background-color: #2280dd;
}

h1 {
  font-family: 'Fedra';
   font-size: 20px;
  color: white;
}

.headergrid {
  display : flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  }


.headeritems {
    width : auto;
             vertical-align : middle ;}


.logo-container {
  text-align: right;
}

.logo-container img {
  width: 50px;
  height: auto;}

.maintitle {
  text-align : center;
}

.boutonheader {
  vertical-align : middle ;
  border: 1px solid white;
  border-radius: 40px;
  font-family: 'Zarid';
  font-size: 12px;
  background-color: transparent;
 color: white;
 }

</style>

