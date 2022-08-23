'use strict';



class Figure {
    
    _typeOfObject = 'figure';

    get getTypeOfObject() {
        return `${this._typeOfObject}`;
    }
}

class Round extends Figure {
    formOfObject = 'round';
    value1 = 4;

    getArea() {
        return Math.PI*this.value1*this.value1;
    }
}

console.log("-----------");
let round1 = new Round();
console.log(typeof(round1));
console.log(round1.getTypeOfObject);
console.log(round1.formOfObject);
console.log("Area " + round1.getArea());
console.log("-----------");

class Square extends Round {
    formOfObject = 'square';

    getArea() {
        return this.value1*this.value1;
    }
}

console.log("-----------");
let square1 = new Square();
console.log(typeof(square1));
console.log(square1.getTypeOfObject);
console.log(square1.formOfObject);
console.log("Area " + square1.getArea());
console.log("-----------");

class Triangle extends Round {
    formOfObject = 'triangle';

    getArea() {
        return ((Math.sqrt(3))/4)*Math.pow(this.value1, 2);
    }
}

console.log("-----------");
let triangle1 = new Triangle();
console.log(typeof(triangle1));
console.log(triangle1.getTypeOfObject);
console.log(triangle1.formOfObject);
console.log("Area " + triangle1.getArea());
console.log("-----------");

// Создание класса Rectangle со вторым свойством.
// От этого класса будут наследоваться все классы
// используемые для объектов для объектов со
// вторым параметром.

class Rectangle extends Round {
    formOfObject = 'Rectangle';
    value2 = 4;

    getArea() {
        return this.value1*this.value2;
    }
}

console.log("-----------");
let rectangle1 = new Rectangle();
console.log(typeof(rectangle1));
console.log(rectangle1.getTypeOfObject);
console.log(rectangle1.formOfObject);
console.log("Area " + rectangle1.getArea());
console.log("-----------");

class Conus extends Rectangle {
    formOfObject = 'conus';

    getArea() {
        return Math.PI*this.value1*(Math.sqrt(Math.pow(this.value1, 2)+Math.pow(this.value2, 2)));
    }
}

console.log("-----------");
let conus1 = new Conus();
console.log(typeof(conus1));
console.log(conus1.getTypeOfObject);
console.log(conus1.formOfObject);
console.log("Area " + conus1.getArea());
console.log("-----------");

// Создание объекта из класса конус с
// заданием новых значений параметров

console.log("-----------");
let conus2 = new Conus();
conus2.value1 = 3;
conus2.value2 = 3;
console.log(typeof(conus2));
console.log(conus2.getTypeOfObject);
console.log(conus2.formOfObject);
console.log("Area " + conus2.getArea());
console.log(conus2);
console.log("-----------");

// попробую реализовать класс с универсальным обработчиком объектов

class Mixer {
    // mix(conus2) {
    //     if (conus2.getTypeOfObject == 'figure') {
    //         if (conus2.formOfObject == 'conus') {
    //             return Math.PI*conus2.value1*(Math.sqrt(Math.pow(conus2.value1, 2)+Math.pow(conus2.value2, 2)));
    //         }
    //     }
    // }
    mix(x) {
        if (x.getTypeOfObject == 'figure') {
            if (x.formOfObject == 'conus') {
                return Math.PI*x.value1*(Math.sqrt(Math.pow(x.value1, 2)+Math.pow(x.value2, 2)));
            }
            if (x.formOfObject == 'square') {
                return Math.pow(x.value1, 2);
            }
            if (x.formOfObject == 'triangle') {
                return ((Math.sqrt(3))/4)*Math.pow(x.value1, 2);
            }
            if (x.formOfObject == 'rectangle') {
                return x.value1*x.value2;
            }
            if (x.formOfObject == 'round') {
                return Math.PI*x.value1*x.value1;
            }
        }
    }
}


// let area = new Mixer().mix(conus2);
// console.log("Area " + area);



//
let area = new Mixer();
console.log(area.mix(conus1));
console.log(area.mix(conus2));
console.log(area.mix(triangle1));
console.log(area.mix(square1));
console.log(area.mix(round1));