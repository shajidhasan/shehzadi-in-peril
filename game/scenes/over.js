import k from "../kaplay"
import { makeBackground } from "../objects/background"


const overMessages = [
    "SHEHZADI IS DEAD, THANKS TO YOU.",
    "HOW COULD YOU LET THE SHEHZADI DIE?",
    "YOU FAILED THE SHEHZADI",
    "SHEHZADI'S FATE WAS IN YOUR HANDS...",
    "YOU WERE HER LAST HOPE...",
    "YOU COULDN'T PROTECT THE SHEHZADI.",
    "YOU'VE LOST THE SHEHZADI FOREVER.",
]


k.scene("over", (score) => {
    let canStartNewGame = false

    const message = overMessages[Math.floor(Math.random() * overMessages.length)]

    k.add(makeBackground())
    k.add([
        k.sprite('game_over'),
        k.anchor('center'),
        k.pos(k.center().sub(k.vec2(0, 80))),
        k.scale(0.5)
    ])
    k.add([
        k.text(message, { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(0, 100))),
        k.z(10)
    ])
    k.add([
        k.text(message, { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(-5, 105))),
        k.color([0, 0, 0]),
        k.opacity(0.5),
        k.z(5)
    ])
    k.add([
        k.text(`SCORE: ${score}`, { font: 'saptami_arcade', size: 48 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(0, 60))),
        k.z(10)
    ])

    k.add([
        k.text(`SCORE: ${score}`, { font: 'saptami_arcade', size: 48 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(-5, 65))),
        k.color([0, 0, 0]),
        k.opacity(0.5),
        k.z(5)
    ])

    k.wait(2, () => { canStartNewGame = true })

    k.onMousePress(() => {
        if (canStartNewGame)
            k.go('start')
    })
})
