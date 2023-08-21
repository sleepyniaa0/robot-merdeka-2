basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P1.setAngle(180)
        basic.pause(500)
        servos.P2.setAngle(180)
        basic.pause(500)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
    } else {
        servos.P1.setAngle(0)
        servos.P2.setAngle(0)
    }
})
