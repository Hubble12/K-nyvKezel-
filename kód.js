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
    this.torol = function() {
    let index = konyvekList.indexOf(this);
  if (index > -1) {
    konyvekList.splice(index, 1);
  }
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

    let tabla = document.createElement("table");
    let fejlec = document.createElement("thead");
    fejlec.innerHTML = "<tr><th>Cím</th><th>Szerző</th><th>Kiadás éve</th><th>Oldalszám</th><th>Kölcsönözve</th><th>Műveletek</th></tr>";
    tabla.appendChild(fejlec);
    let torzs = document.createElement("tbody");

    for(let i = 0; i<konyvekList.length; i++){
        if(kolcsonzottSzuro && konyvekList[i].kolcsonozve){
        }
        else{
                    let konyv = konyvekList[i];
                    let sor = document.createElement("tr");

                    [konyv.cim, konyv.szerzo, konyv.kiadas, konyv.oldalszam, konyv.kolcsonozve ? "Igen" : "Nem"].forEach(function(ertek){
                        let cella = document.createElement("td");
                        cella.textContent = ertek;
                        sor.appendChild(cella);
                    });

                    let muveletek = document.createElement("td");
                    let kolcsonozGomb = document.createElement("button");
                    kolcsonozGomb.innerText = "Kölcsönöz";
                    kolcsonozGomb.onclick = function() {
                        konyv.kolcsonoz();
                    };
                    muveletek.appendChild(kolcsonozGomb);

                    let visszahozGomb = document.createElement("button");
                    visszahozGomb.innerText = "Visszahoz";
                    visszahozGomb.onclick = function() {
                        konyv.visszahoz();
                    };
                    muveletek.appendChild(visszahozGomb);

                    let torolGomb = document.createElement("button");
                    torolGomb.innerText = "Töröl";
                    torolGomb.onclick = function() {
                        konyv.torol();
                        
                    };
                    muveletek.appendChild(torolGomb);


                    sor.appendChild(muveletek);
                    torzs.appendChild(sor);
                }
    }

        if(torzs.childElementCount === 0){
            let uresSor = document.createElement("tr");
            let uresCella = document.createElement("td");
            uresCella.colSpan = 6;
            uresCella.textContent = "Nincs megjeleníthető könyv.";
            uresSor.appendChild(uresCella);
            torzs.appendChild(uresSor);
            let statisztikaDiv = document.getElementById("statisztikaDiv")
            statisztikaDiv.innerHTML = "Nincs megjeleníthető könyv a szűrés miatt."
        }

        tabla.appendChild(torzs);
        celpont.appendChild(tabla);

    let maxVastagsag = 0
    let legregebbiKonyv = 3000

    let legregebbiValasztas;
    let legvastagabbValasztas;

    let atlagOldalSzam
    let szumma = 0
    let darabSzam = konyvekList.length

    for(let i = 0; i<konyvekList.length; i++){
        szumma += konyvekList[i].oldalszam
        console.log(szumma)
    }
    console.log("atlagteszt")
    console.log(szumma)
    console.log(darabSzam)
    atlagOldalSzam = Math.round(szumma / darabSzam)

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
    statisztikaDiv.innerHTML = "Legvastagabb könyv: " + legvastagabbValasztas.cim + "; Oldalak: " + legvastagabbValasztas.oldalszam + "<br>Legregebbi könyv: " + legregebbiValasztas.cim + "; Kiadás: " + legregebbiValasztas.kiadas + "<br>Átlagos oldalszám: " + atlagOldalSzam

      
}

function hozzaadas(){
    let ujCim = document.getElementById("input1").value
    let ujSzerzo = document.getElementById("input2").value
    let ujKiadas = document.getElementById("input3").value
    let ujOldalSzam = Number(document.getElementById("input4").value)

    let ujKonyv = new Konyv(ujCim, ujSzerzo, ujKiadas, ujOldalSzam)
    konyvekList.push(ujKonyv)

    feltoltes()


}


//-------------------------------------------------------------------------

feltoltes()

