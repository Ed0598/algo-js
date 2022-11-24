let min = prompt ("Your min number")
let max = prompt ("Your max number")
 if (min > max){
    console.error("Try again")
 }

   else if (min < max){
        let current = prompt ("Your number between min and max")
        if ((min < current) && (max > current)){
            console.log (current)
    }
}

