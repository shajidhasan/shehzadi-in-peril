import k from "../kaboom"
import { makeBackground } from "../objects/background"

k.scene("over", (score) => {
    let canStartNewGame = false

    k.add(makeBackground())
    k.add([
        k.sprite('game_over'),
        k.anchor('center'),
        k.pos(k.center().sub(k.vec2(0, 80))),
        k.scale(0.5)
    ])
    k.add([
        k.text("HOW COULD YOU LET SHEHZADI DIE?!", { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(0, 100))),
        k.z(10)
    ])
    k.add([
        k.text("HOW COULD YOU LET SHEHZADI DIE?!", { font: 'saptami_arcade', size: 24 }),
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
