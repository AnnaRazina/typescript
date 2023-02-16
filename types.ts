//переменныe
// простые
//числа
let age:number = 44;
console.log(age);
//строки
let y:string = 'hello';
console.log(y);
const x:string = 'world';
console.log(x);

function Salute(fr:string, fr2:string):void {
    console.log(fr + ',, ' + fr2)
};
Salute(`${y}`,`${x}`);
//булевые
let isDone:boolean = true;
console.log(isDone);
//undefined
let u:undefined = undefined;
console.log(u);
//null
let n:null = null;
console.log(n);



//массивы
const numberArray:number[] =  [1, 1, 6, 3];
const numberArray2:Array<number> = [1, 1, 6, 3];

//Tuple
const contact:[string, number] = ['Vasya', 1234567];

//перечисления
enum Color {
    Red,
    Blue = 'blue',
 }
let R:Color = Color.Red;
console.log(R);
let B:Color = Color.Blue;
console.log(B);

//объекты
class Humen {
    name:string;
    age:number;

    constructor (name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

let user:Humen = new Humen("ben", 25);
console.log(user);

//объекты - union
type Person = {
    name: string;
    //могут иметь несколько значений
    age: number|string;
    //необязятельные ключ/значение
    isSuperHero?: boolean;
    occupation?: string|null;
  };
  
//специфические переьенные
//Any - переменная любого типа.
let variable:any = 43;
variable = 'new string';
variable = [];
//unknown - неизвестный тип, может принимать любое значение.
let notSure:unknown = 4;
console.log(notSure);