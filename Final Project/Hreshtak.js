class Hreshtak extends KendaniEak {
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

    gtnelZuyg(){
        if(this.ser == 1){
            this.zuyg = 0;
        }
        else{
            this.zuyg = 1;
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(6);
        var norVandak = random(datarkvandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 1;

            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy++;
        }
    }
      bazmanal() {
        this.gtnelZuyg();
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
       for(var i in hreshtak){
           if(norVandak && norVandak[0]==hreshtak[i] && norVandak[1]==[i].y){
               var zuygiIndex = i;
               break;
           }
       }
       var norVandak = random(this.yntrelVandak(0,1));
       if(zuygiIndex && norVandak && hreshtak[zuygiIndex].ser == this.zuyg && this.energy>=this.bazmanaluAragutyun)
        var norhreshtak = new Hreshtak(vandak[0], vandak[1], 2);
            hreshtak.push(norhreshtak);
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