/*La fonction calcSurface a pour paramètres length (longueur) et width (largeur). 
On demande à la fonction de retourner en multipliant la longueur par la largeur*/
function calcSurface (length , width){
    return length*width

}
/* Ensuite il faut créer une fonction et pour length et pour width afin de créer une boite
permettant de demander à l'utilisiteur d'entrer un valeur pour la largeur et pour la longueur.
pour ensuite afficher la foncion calcSurface*/
let length = prompt("Enter a lenght")
let width =promptq("Enter a width")
console.log(calcSurface(length,width))
