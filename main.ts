let love = 0
input.onPinPressed(TouchPin.P0, function () {
    love = randint(0, 100)
    if (love <= 60) {
        basic.showLeds(`
            . # . # .
            # # # . #
            # . . # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
    } else {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
    }
    basic.showNumber(love)
    basic.pause(1000)
})
