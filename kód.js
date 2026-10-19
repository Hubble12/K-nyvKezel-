let konyvekList = []
let kolcsonzottSzuro = false

function szures1(){
    if(kolcsonzottSzuro){
        kolcsonzottSzuro = false
        document.getElementById("buttonSzures1").innerText = "Összes"
    }
    else{
        kolcsonzottSzuro = true
        document.getElementById("buttonSzures1").innerText = "Szabad"
    }
    feltoltes()
}

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
  let celpont = document.getElementById('elemTabla');
  celpont.innerHTML = "";

    for(let i = 0; i<konyvekList.length; i++){
        if(kolcsonzottSzuro && konyvekList[i].kolcsonozve){
        }
        else{


  let elem = document.createElement("div");
        elem.innerText = konyvekList[i].cim +"; Szerző: "+ konyvekList[i].szerzo +"; Kiadás: "+ konyvekList[i].kiadas +"; Oldalak: "+ konyvekList[i].oldalszam + "; Kölcsönözve: " + konyvekList[i].kolcsonozve
   
   //-------------------------------------------------------------------------
    let kolcsonozGomb = document.createElement("button");
    kolcsonozGomb.innerText = "Kölcsönöz";
    kolcsonozGomb.onclick = function() {
      konyvekList[i].kolcsonoz();
    };
    elem.appendChild(kolcsonozGomb);


    let visszahozGomb = document.createElement("button");
    visszahozGomb.innerText = "Visszahoz";
    visszahozGomb.onclick = function() {
      konyvekList[i].visszahoz();
    };
    elem.appendChild(visszahozGomb);
    //-------------------------------------------------------------------------
    celpont.appendChild(elem);
}
    }

    let maxVastagsag = 0
    let legregebbiKonyv = 3000

    let legregebbiValasztas;
    let legvastagabbValasztas;

    for(let i = 0; i<konyvekList.length; i++){
        if(konyvekList[i].oldalszam > maxVastagsag){
            maxVastagsag = konyvekList[i].oldalszam
        }
        if(konyvekList[i].kiadas < legregebbiKonyv){
            legregebbiKonyv = konyvekList[i].kiadas
        }
    }
    for(let i = 0; i<konyvekList.length; i++){
        if(konyvekList[i].oldalszam == maxVastagsag){
            legvastagabbValasztas = konyvekList[i]
        }
        if(konyvekList[i].kiadas == legregebbiKonyv){
            legregebbiValasztas = konyvekList[i]
        }
    }


    let statisztikaDiv = document.getElementById("statisztikaDiv")
    statisztikaDiv.innerHTML = "Legvastagabb könyv: " + legvastagabbValasztas.cim + "; Oldalak: " + legvastagabbValasztas.oldalszam + "<br>Legregebbi könyv: " + legregebbiValasztas.cim + "; Kiadás: " + legregebbiValasztas.kiadas


      
}

function hozzaadas(){
    let ujCim = document.getElementById("input1").value
    let ujSzerzo = document.getElementById("input2").value
    let ujKiadas = document.getElementById("input3").value
    let ujOldalSzam = document.getElementById("input4").value

    let ujKonyv = new Konyv(ujCim, ujSzerzo, ujKiadas, ujOldalSzam)
    konyvekList.push(ujKonyv)

    feltoltes()


}


//-------------------------------------------------------------------------

feltoltes()

