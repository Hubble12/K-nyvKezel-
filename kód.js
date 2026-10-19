let konyvekList = []

function Konyv(pCim, pSzerzo, pKiadas, pOldalszam) {
  this.cim = pCim;
  this.szerzo = pSzerzo;
  this.kiadas = pKiadas;
  this.oldalszam = pOldalszam;
  this.kolcsonozve = false;

  //metódusok
  this.kolcsonoz = function() {
    this.kolcsonozve=true
    feltoltes()
  };
  this.visszahoz = function() {
    this.kolcsonozve=false
    feltoltes()
  };
}

//-------------------------------------------------------------------------
let konyv1 = new Konyv("Egri csillagok", "Gárdonyi Géza", 1901, 650);
let konyv2 = new Konyv("Az arany ember", "Jókai Mór", 1872, 550);
let konyv3 = new Konyv("Toldi", "Arany János", 1846, 80);
konyvekList.push(konyv1)
konyvekList.push(konyv2)
konyvekList.push(konyv3)
console.log(konyvekList)
//-------------------------------------------------------------------------

function feltoltes(){
    for(let i = 0; i<konyvekList.length; i++){
        let elem = document.createElement("div");
        elem.innerText = konyvekList[i].cim +"; Szerző: "+ konyvekList[i].szerzo +"; Kiadás: "+ konyvekList[i].kiadas +"; Oldalak: "+ konyvekList[i].oldalszam + "; Kölcsönözve: " + konyvekList[i].kolcsonozve
        let celpont = document.getElementById('elemTabla');
        celpont.appendChild(elem);

        
    }
}

function hozzaadas(){
    let ujCim = document.getElementById("input1").value
    let ujSzerzo = document.getElementById("input2").value
    let ujKiadas = document.getElementById("input3").value
    let ujOldalSzam = document.getElementById("input4").value

    let ujKonyv = new Konyv(ujCim, ujSzerzo, ujKiadas, ujOldalSzam)
    konyvekList.push(ujKonyv)

    document.getElementById("elemTabla").innerHTML = "";
    feltoltes()


}


//-------------------------------------------------------------------------

feltoltes()

