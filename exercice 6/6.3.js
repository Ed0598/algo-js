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

list_Rect=[]
for(i=0;i<1000;i++){
    randomx=Math.floor(Math.random() * 11);
    randomy=Math.floor(Math.random() * 11);
    random_width=Math.floor(Math.random() * 11);
    while(random_width==0){
        random_width=Math.floor(Math.random() * 11);
    }
    random_length=Math.floor(Math.random() * 11);
    while(random_length==0){
        random_length=Math.floor(Math.random() * 11);
    }
    Rect_i=new Rectangle(randomx,randomy,random_width,random_length)
    list_Rect.push(Rect_i)
}

console.log(list_Rect)