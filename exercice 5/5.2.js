function askTvserie ()
{
    let arr = []
    nom_serie = prompt ("Name of the serie")
    year_serie = prompt ("Year of the production")
    cast_serie = prompt ("Names of the cast members")
    arr.push (cast_serie)

    while (cast_serie != "")
    {
        cast_serie = prompt ("Names of the cast members")
        arr.push(cast_serie)   
    }
    arr.pop()

    let myObject = {
        name : nom_serie ,
        year : year_serie ,
        cast : arr ,
        
    }
    return myObject
}
let tvSerie = askTvserie()
function randomizeCast (tvSerie){
    cast_list= tvSerie ["cast"]
    l= cast_list.length
    randomcast=[]
    for (i=0;i<l;i++)
    {
        random = Math.floor(Math.random ()*l)
        while (randomcast.includes (cast_list[random]))
        {
            random = Math.floor(Math.random ()*l) 
        }
            randomcast.push(cast_list[random])

    }
    return randomcast
}
console.log(randomizeCast(tvSerie))

