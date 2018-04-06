var matrix = [
    [3, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [5, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [6, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [7, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [4, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0]
];
var grassArr = []
var side = 50;
var xotaker = [];
var xotakerA = [];
var gishatich = [];
var hresh = [];
var hreshtak = [];
var hreshaker = [];

weather = "spring";
statistics = {
    'gishatichneri_qanak': 0,
    'hreshneri qanak': 0
};
function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y, 2))
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y, 3))
            }
            else if (matrix[y][x] == 4) {
                hresh.push(new Hresh(x, y, 4))
            }
            else if (matrix[y][x] == 5) {
                hreshaker.push(new Hreshaker(x, y, 5))
            }
            else if (matrix[y][x] == 6) {
                hreshtak.push(new Hreshtak(x, y, 6))
            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {

                //Grassi  guyneri popoxutyun
                if (weather == "winter") {
                    fill(255, 255, 255);
                }
                else if (weather == "spring") {
                    fill(128, 173, 26);
                }
                else if (weather == "summer") {
                    fill(18, 229, 22);
                }
                else {
                    fill(241, 215, 146);
                }
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 0) {

                fill(222, 229, 229);
                rect(x * side, y * side, side, side);
            }
            //xotakeri guyneri popoxutyun
            else if (matrix[y][x] == 2) {
                if (weather == "winter") {
                    fill(235, 240, 173);
                }
                else if (weather == "spring") {
                    fill(145, 156, 6);
                }
                else if (weather == "summer") {
                    fill(223, 240, 13);
                }
                else {
                    fill(253, 204, 2);
                }
                rect(x * side, y * side, side, side);
            }
            // gishatichi guyneri popoxutyun
            else if (matrix[y][x] == 3) {
                if (weather == "winter") {
                    fill(186, 247, 244);
                }
                else if (weather == "spring") {
                    fill(95, 241, 199);
                }
                else if (weather == "summer") {
                    fill(21, 227, 158);
                }
                else {
                    fill(127, 190, 181);
                }
                rect(x * side, y * side, side, side);
            }
            // hreshi guyneri popoxutyun
            else if (matrix[y][x] == 4) {
                if (weather == "winter") {
                    fill(223, 140, 155);
                }
                else if (weather == "spring") {
                    fill(250, 43, 118);
                }
                else if (weather == "summer") {
                    fill(254, 1, 47);
                }
                else {
                    fill(111, 13, 38);
                }
                rect(x * side, y * side, side, side);
            }
            //Hreshtaki guyneri popoxutyun
            else if (matrix[y][x] == 6) {
                if (weather == "winter") {
                    fill(208, 143, 211);
                }
                else if (weather == "spring") {
                    fill(235, 113, 241);
                }
                else if (weather == "summer") {
                    fill(243, 0, 255);
                }
                else {
                    fill(199, 137, 211);
                }
                rect(x * side, y * side, side, side);
            }
            //Hreshakeri guyneri popoxutyun
            else if (matrix[y][x] == 5) {
                if (weather == "winter") {
                    fill(244, 221, 170);
                }
                else if (weather == "spring") {
                    fill(239, 188, 72);
                }
                else if (weather == "summer") {
                    fill(255, 177, 0);
                }
                else {
                    fill(254, 177, 1);
                }
                rect(x * side, y * side, side, side);
            }


        }

    }

    //exanakneri hertapox
    var timerId = setTimeout(function tick() {
        if (weather == "spring") {
            weather = "summer";
        }
        else if (weather == "summer") {
            weather = "autumn";
        }
        else if (weather == "autumn") {
            weather = "winter";
        }
        else if (weather == "winter") {
            weather = "spring";
        }
        // console.log(weather);
        timerId = setTimeout(tick, 5000);
    }, 5000);
}
if (xotaker.length == 0 && gishatich == 0 && Hreshtak == 0) {
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);
    fill('black');
    textSize(32);
    text('Game Over: Sard Win', 10, 30);
} else if (xotaker.length == 0 && gishatich == 0 && Hresh == 0) {
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);
    fill('black');
    textSize(32);
    text('Game Over: Hreshtak Win', 10, 30);
} else if (Hreshtak.length == 0 && gishatich == 0 && Hresh == 0) {
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);
    fill('black');
    textSize(32);
    text('Game Over: Xotaker Win', 10, 30);
} else if (xotaker.length == 0 && Hreshtak == 0 && Hresh == 0) {
    background('#acacac');
    createCanvas(matrix[0].length * side, matrix.length * side);
    fill('black');
    textSize(50);
    text('Game Over: Gishatich Win', 10, 30);
}
for (var i in grassArr) {
    grassArr[i].bazmanal();
}
for (var i in xotaker) {
    xotaker[i].sharjvel();
    xotaker[i].utel();
    xotaker[i].bazmanal();
    xotaker[i].gtnelZuyg();
}
for (var i in gishatich) {
    gishatich[i].sharjvel();
    gishatich[i].utel();
    gishatich[i].bazmanal();
    gishatich[i].gtnelZuyg();
}
for (var i in hresh) {
    hresh[i].sharjvel();
    hresh[i].utel();
    hresh[i].bazmanal();
    hresh[i].gtnelZuyg();
}
for (var i in hreshaker) {
    hreshaker[i].sharjvel();
    hreshaker[i].utel();
    hreshaker[i].bazmanal();
    hreshaker[i].gtnelZuyg();
}
for (var i in Hreshtak) {
    hreshtak[i].sharjvel();
    hreshtak[i].utel();
    hreshtak[i].bazmanal();
    hreshtak[i].gtnelZuyg();
}


