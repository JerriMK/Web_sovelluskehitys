/*
Tee ES6-luokka Henkilo jolla on kolme attribuuttia(muuttujaa) etunimi, sukunimi ja hetu (henkilötunnus) sekä metodit(funktiot): konstruktori eli alustajafunktio jossa annet aan muuttujille alkuarvot, get- ja set-metodit kaikille attribuuteille (käytä ES6:n uutta syntaksia). Tee myös tulosta()-metodi jossa tulostat attribuuttien arvot. Käytä luokkaa siten että tulostat seuraavan lauseen: "x on Henkilö jonka henkilötunnus on y". Tee hetun setteriin tarkistus joka pakottaa hetun seuraavan säännönmukaisen lausekkeen määrittelemään muotoon: /\d{6}[+-A]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]/. Kokeile setterin toimintaa.

Tee Henkilo -luokalle aliluokka Opiskelija joka perii Henkilon ominaisuudet. Tee Opiskelija -luokalle oma muuttuja op (opintopisteet) ja sille getteri ja setteri. Hae konstruktorissa yliluokan attribuutit super-viittauksella.Ylikirjoita tulosta()-metodi niin että myös opintopisteet tulostuvat. Käytä luokkaa siten että tulostat seuraavan lauseen: "x on opiskelija jonka henkilötunnus on y ja opintopistekertymä z kpl".
*/

class Henkilo {
    constructor(etunimi, sukunimi, hetu) {
        this._etunimi = etunimi;
        this._sukunimi = sukunimi;
        this._hetu = hetu;
    }

    //getterit

    get etunimi () {
        return this.name;
    }

    get sukunimi () {
        return this.sukunimi;
    }

    get hetu () {
        return this.hetu;
    }

    //setterit

    set etunimi(uusiNimi) {
        this._etunimi = uusiNimi;
    }

    set sukunimi(uusiSukunimi) {
        this._sukunimi = uusiSukunimi;
    }

    set hetu (uusiHetu) {
        const regx = /\d{6}[+-A]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]/;
        if (uusiHetu.length === 11 && regx.test(uusiHetu)) {
            this._hetu = uusiHetu;
            console.log(`Asetettu hetu on: ${this._hetu}`);
        } else {
            console.log('Antamasi hetu oli virheellinen');
        }
    }
    //metodit

    tulosta() {
        console.log(this._etunimi);
        console.log(this._sukunimi);
        console.log(this._hetu);
    }
}

class Opiskelija extends Henkilo {
    constructor(etunimi, sukunimi, hetu, op) {
        super(etunimi, sukunimi, hetu);
        this._opintopisteet = op;
    }

    get op () {
        return this._opintopisteet
    }

    set op (opPisteet) {
        this._opintopisteet = opPisteet;
    }

    tulosta () {
        super.tulosta();
        console.log(this._opintopisteet);
    }
}



//Luodaan henkilö objekti ja testataan sen tulosta() metodia

let petteri = new Henkilo('Petteri', 'Penonen', '121096-0546');
petteri.tulosta();

//Testataan, että toimiiko hetun setteri niin kuin sen pitäisi

petteri.hetu = '111069-0345';
petteri.hetu = 'moro';

//Tulostetaan tehtävänannon mukainen "x on Henkilö jonka henkilötunnus on y" lause

console.log(`${petteri._etunimi} ${petteri._sukunimi} on henkilö jonka henkilötunnus on ${petteri._hetu}`);
console.log('--------------------------\n--------------------------');

//Tehdään opiskelija objekti ja testataan sen ylikirjoitettua tulosta() metodia
let onni = new Opiskelija('Petri', 'Petelius', '130999-0234', 56);
onni.tulosta();
console.log('--------------------------');

//Tulostetaan tehtävänannon mukainen "x on opiskelija jonka henkilötunnus on y ja opintopistekertymä z kpl" lause

console.log(`${onni._etunimi} ${onni._sukunimi} on opiskelija jonka henkilötunnus on ${onni._hetu} ja opintopistekertymä ${onni._opintopisteet} kpl`);
console.log('--------------------------\n--------------------------');


//Tulostetaan luodut oliot käyttäen tulostusmetodia()

function objInspect(Obj, sSeparator, sText) {
    let r = [];
    let p, t;

    if (typeof sText === 'undefined') {
        sText = '';
    }
    if (typeof sSeparator === 'undefined') {
        sSeparator = ',';
    }

    if (sText.length > 64) {
        return '[MAX LEN!]';
    }

    for (p in Obj) {
        if (p in Obj) {
            t = typeof Obj[p];

            if (t === 'number') {
                t = 'n';
            } else if (t === 'string') {
                t = 's';
            } else if (t === 'boolean') {
                t = 'b';
            } else if (t === 'function') {
                t = 'fnct';
            } else if (t === 'null') {
                t = 'N';
            } else if (t === 'undefined') {
                t = 'undef';
            }

            r.push(sText + p + '[' + t + ']=' + (t === 'object' ? 'obj:' +
                objInspect(Obj[p], sText + ';') : Obj[p]));
        }
    }
    return r.join(sText + sSeparator);
}

function printObj(obj) {
    console.log('Contents of object from constructor ' + obj.constructor.name + ':\n' + objInspect(obj, '\n'));
}

printObj(petteri);
console.log('--------------------------')
printObj(onni);