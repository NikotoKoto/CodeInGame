/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

let thorX = initialTx;
let thorY = initialTy;

// game loop
while (true) {

    let dirX = '';
    let dirY = '';

    if (thorY > lightY) {
        dirY = "N"
        thorY--
        
    }

    else if (thorY < lightY) {
        dirY = "S"
        thorY++
        
    }


    if (thorX > lightX) {
        dirX = "W"
        thorX--
        
    }

    else if (thorX < lightX) {
        dirX = "E"
        thorX++
        

    }


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(dirY+dirX);
}
