class Rectangle {
    constructor (topLeftXpos,topLeftYpos,width,length)
    {
    this.topLeftXpos = topLeftXpos
    this.topLeftYpos = topLeftYpos
    this.width = width
    this.length= length
    }
    collides (otherRectangle){
        if(this.topLeftXPos+this.length<otherRectangle.topLeftXPos||
            otherRectangle.topLeftXPos+otherRectangle.length<this.topLeftXPos||
            otherRectangle.topLeftYPos<this.topLeftYPos-this.width||
            this.topLeftYPos<otherRectangle.topLeftYPos-otherRectangle.width)
            return false
            
        else
        {
            return true
        }
    }
}
let Rect1=new Rectangle(-7,2,2,4)
let Rect2=new Rectangle(-4,1,1,3)

console.log(Rect1.collides(Rect2))