let love = 0
input.onPinPressed(TouchPin.P0, function () {
    love = randint(0, 100)
    if (love <= randint(0, 20)) {
        basic.showIcon(IconNames.Angry)
    } else {
        if (love <= randint(21, 40)) {
            basic.showIcon(IconNames.Sad)
        } else {
            if (love <= randint(41, 80)) {
                basic.showIcon(IconNames.Confused)
            } else {
                if (love <= randint(81, 100)) {
                    basic.showIcon(IconNames.Happy)
                }
            }
        }
    }
    basic.showNumber(love)
    basic.pause(1000)
})
