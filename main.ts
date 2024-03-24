let accY = 0
let accX = 0
let Y = 2
let X = 2
basic.forever(function () {
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX < -200) {
        X = X - 1
    } else if (accX > 200) {
        X = X + 1
    }
    if (accY < -200) {
        Y = Y - 1
    } else if (accY > 200) {
        Y = Y + 1
    }
    basic.clearScreen()
    led.plot(X, Y)
    basic.pause(100)
    if (X > 4) {
        X = 2
    }
    if (Y > 4) {
        Y = 2
    }
})
