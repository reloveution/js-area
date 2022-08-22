// 'use strict';



class Figure {
    
    // typeOfObject = "figure";

    // getTypeOfObject(typeOfObject) {
    //     return typeOfObject;
    // }
}

class Round extends Figure {
    // formOfObject = 'round';

    constructor (value1) {
        // this.name = name;
        this.value1 = value1;
    }

    // getFormOfObject(typeOfObject) {
    //     return typeOfObject;
    // }

    getArea(value1) {
        return Math.PI * this.value1 * this.value1;
    }
}

let round1 = new Round(2);
console.log("Area" + round1.getArea);