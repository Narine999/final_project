class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
        this.zuyg;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }

    gtnelZuyg() {
        if (this.ser == 1) {
            this.zuyg = 0;
        }
        else {
            this.zuyg = 1;
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.x == grassArr[i].x) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        this.gtnelZuyg();
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        for (var i in xotaker) {
            if (norVandak && norVandak[0] == xotaker[i] && norVandak[1] == xotaker[i].y) {
                var zuygiIndex = i;
                break;
            }
        }
        var norVandak = random(this.yntrelVandak(0, 1));
        if (zuygiIndex && norVandak && xotaker[zuygiIndex].ser == this.zuyg && this.energy >= this.bazmanaluAragutyun)
            var norXotaker = new Xotaker(vandak[0], vandak[1], 2);
        xotaker.push(norXotaker);
        matrix[this.y][this.x] = 2;

        if (matrix[norVandak[1]][norVandak[0]] == 1) {
            for (var c in grassArr) {
                if (this.x == grassArr[c].x && this.y == grassArr[c].y) {
                    grassArr.splice(c, 1);
                    break;
                }
            }
        }
    }
}

