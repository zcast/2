radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Hello!")
    basic.showNumber(receivedNumber)
    A += 1
    basic.showString("Mail")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("reset")
    basic.showString("reset")
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("you have")
    basic.showNumber(A)
    basic.showString("Mail")
})
let A = 0
radio.setGroup(1)
A = 0
