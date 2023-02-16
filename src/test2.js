var Cat = /** @class */ (function () {
    function Cat(moving, voice) {
        this.moving = moving;
        this.voice = voice;
    }
    Cat.prototype.info = function () {
        return "This animal: moving in the ".concat(this.moving, ", say: ").concat(this.voice, ".");
    };
    Cat.prototype.say = function () {
        return this.voice;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.moving = 'air';
        this.voice = 'piu';
    }
    Bird.prototype.info = function () {
        return "This animal: moving in the ".concat(this.moving);
    };
    Bird.prototype.say = function () {
        return this.voice;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.moving = 'water';
    }
    Fish.prototype.info = function () {
        return "This animal: moving in the ".concat(this.moving, ".");
    };
    Fish.prototype.say = function () {
        return;
    };
    return Fish;
}());
var animal = new Cat('land', 'miau').info();
console.log(animal);
