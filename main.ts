input.onGesture(Gesture.TiltLeft, function () {
    Dado = randint(1, 20)
    basic.showNumber(Dado)
    basic.pause(1000)
    basic.clearScreen()
})
let Dado = 0
basic.showIcon(IconNames.Target)
basic.pause(500)
basic.showIcon(IconNames.SmallSquare)
basic.pause(500)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(500)
basic.clearScreen()
