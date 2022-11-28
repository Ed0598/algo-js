class circle {
    constructor(xPos,Ypos,radius){
        this.xPos = xPos
        this.Ypos = Ypos
        this.radius = radius
    }
    move(xOffset, yOffset){
        this.xPos += xOffset
        this.Ypos += yOffset
    }
    get surface ()
    {
    return Math.PI*(Math.pow(this.radius,2))  
    }
}

let cercle = new circle(2,4,3)

console.log(cercle.xPos,cercle.Ypos,cercle.radius)
console.log(cercle.surface)
cercle.move (2,3)
console.log(cercle.xPos,cercle.Ypos,cercle.radius)
console.log(cercle.surface)

