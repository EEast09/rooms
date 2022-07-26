class room{
    constructor(name, length, width){
        this.name = name;
        this.length = length;
        this.width =width;
    }
    getArea = () =>{
        return this.width * this.length
    }
    getPerimeter =() => {
        return this.width + this.width + this.length + this.length

    }
}

const room1 = new room("Sun", 30, 20);
const room2 = new room("Green", 15, 20);

console.log(`This is the name of the rectangle ${room1.name}.`)
console.log(room1.length)
console.log(room1.width)
console.log(room1.getArea());
console.log(room1.getPerimeter());
console.log(`This is the name of the rectangle ${room2.name}.`)
console.log(room2.length)
console.log(room2.width)
console.log(room2.getArea());
console.log(room2.getPerimeter());


room.available = true;
room2.available = false;

console.log(room.available)

console.log(room2.available)

room.capacity= (num) => {
 if(num != 15){
    return num
 } else {
    return 15;
 }
}  

room2.capacity = 18;

console.log(room1.capacity)
console.log(room2.capacity)





