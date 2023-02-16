//переменныe
// простые
//числа
var age = 44;
console.log(age);
//строки
var y = 'hello';
console.log(y);
var x = 'world';
console.log(x);
function Salute(fr, fr2) {
    console.log(fr + ',, ' + fr2);
}
;
Salute("".concat(y), "".concat(x));
//булевые
var isDone = true;
console.log(isDone);
//undefined
var u = undefined;
console.log(u);
//null
var n = null;
console.log(n);
//массивы
var numberArray = [1, 1, 6, 3];
var numberArray2 = [1, 1, 6, 3];
//Tuple
var contact = ['Vasya', 1234567];
//перечисления
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var R = Color.Red;
console.log(R);
var B = Color.Blue;
console.log(B);
//объекты
var Humen = /** @class */ (function () {
    function Humen(name, age) {
        this.name = name;
        this.age = age;
    }
    return Humen;
}());
var user = new Humen("ben", 25);
console.log(user);
//специфические переьенные
//Any - переменная любого типа.
var variable = 43;
variable = 'new string';
variable = [];
//unknown - неизвестный тип, может принимать любое значение.
var notSure = 4;
console.log(notSure);
