class Hresh extends KendaniEak {

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
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(3);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 1;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
    }
    bazmanal() {
        this.gtnelZuyg();
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        for (var i in hresh) {
            if (norVandak && norVandak[0] == xotaker[i] && norVandak[1] == [i].y) {
                var zuygiIndex = i;
                break;
            }
        }
        var norVandak = random(this.yntrelVandak(0));
        console.log(norVandak);
        if (zuygiIndex && norVandak && hresh[zuygiIndex].ser == this.zuyg && this.energy >= this.bazmanaluAragutyun)
            var norhresh = new Hresh(vandak[0], vandak[1], 2);
        hresh.push(norhresh);
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
console.log(statistics); 