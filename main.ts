basic.forever(function on_forever() {
    if (input.compassHeading() < 45) {
        basic.showString("K")
    } else if (input.compassHeading() < 90) {
        basic.showString("KD")
    } else if (input.compassHeading() < 135) {
        basic.showString("D")
    } else if (input.compassHeading() < 180) {
        basic.showString("GD")
    } else if (input.compassHeading() < 225) {
        basic.showString("G")
    } else if (input.compassHeading() < 270) {
        basic.showString("GB")
    } else if (input.compassHeading() < 315) {
        basic.showString("B")
    } else if (input.compassHeading() < 360) {
        basic.showString("KB")
    } else {
        basic.showString("K")
    }
    
})
