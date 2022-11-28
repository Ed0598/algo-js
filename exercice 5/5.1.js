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

console.log(askTvserie())