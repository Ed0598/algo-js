/* Je crée la function rand10 sans lui définir de paramètres.
Ensuite je demande de retourner Math.floor qui permets de choisir un nombre pair,
accompagné de Math.random qui choisir un nombre random entre *le nombre qu'on veut +1*/
function rand10(){
    return Math.floor(Math.random()*10 +1)
}
console.log(rand10());