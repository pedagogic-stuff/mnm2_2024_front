<header>
  <div class="header">
    <img
      class="image-bandeau-bichromie"
      src="/images/Image-bandeau-bichromie.jpg"
      alt=""
    />
    <div class="bouton bouton-accueil">
      <svg
        class="arrow-left"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12.5H6M12 5.5L5 12.5L12 19.5"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      <a href="/">Accueil</a>
    </div>
    
    <div class="titre">
      Trésors d’artisans
    </div>
    
    <div class="credit">
      <div>Crédits ©</div>
    </div>
  </div>
</header>

<style>

.header {
  position: fixed;
  z-index: 3;
  inset: 0;
  width : 100%;
  height: 60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.image-bandeau-bichromie {
  width: 100%;
  height: 59px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  object-fit: cover;
}
.credit {
  background: rgba(255, 255, 255, 0);
  color : white;
  font-family : "Zarid";
  font-size : 20px;
  border-radius: 50px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  padding: 5px 15px 3px 20px;
  position: relative;
}

.arrow-left {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  position: relative;
  overflow: visible;
  position: relative;
}

.titre {
  color: #ffffff;
  text-align: center;
  font-family: "Fedra", sans-serif;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
}

.bouton-accueil {
  color : white;
  font-size: 20px;
  border-radius: 20px;
  border-style: solid;
  border-color: #ffffff;
  padding: 5px 15px 3px 20px;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
}



</style>

