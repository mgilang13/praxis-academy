export class Math {
    constructor() {
        this.sum = function(x,y) {
            return x+y;
        }
        this.sub = function(x,y) {
            return x-y;
        }
    }

    calculateSum(a,b) {
        return this.sum(a,b);
    }
    calculateSub(a,b) {
        return this.sub(a,b);
    }
}