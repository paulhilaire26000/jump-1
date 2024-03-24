input.onGesture(Gesture.LogoUp, function () {
    Y = Y + 1
})
input.onGesture(Gesture.TiltRight, function () {
    X = X + 1
})
input.onGesture(Gesture.TiltLeft, function () {
    X = X - 1
})
input.onGesture(Gesture.LogoDown, function () {
    Y = Y - 1
})
let X = 0
let Y = 0
Y = 2
X = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(X, Y)
})
