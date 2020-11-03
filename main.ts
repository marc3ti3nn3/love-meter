let love = 0
input.onPinPressed(TouchPin.P0, function () {
    love = randint(1, 100)
    if (love <= 20) {
        basic.showIcon(IconNames.Angry)
    } else {
        if (love <= 40) {
            basic.showIcon(IconNames.Sad)
        } else {
            if (love <= 80) {
                basic.showIcon(IconNames.Confused)
            } else {
                if (love <= 100) {
                    basic.showIcon(IconNames.Happy)
                }
            }
        }
    }
    basic.showNumber(love)
    basic.pause(1000)
})
