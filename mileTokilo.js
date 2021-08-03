// mile t kilometer

function MileTokillo(miles) {

    let km = miles * 1.60934;
    return km;
    
}


var Mymile = 3;

let myKm =  MileTokillo(Mymile);
console.log("DiSTANCE FROM MY HOME ", Math.floor(myKm));