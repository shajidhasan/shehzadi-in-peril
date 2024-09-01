import k from "../kaplay"
import { makeBackground } from "../objects/background"



k.scene("success", () => {
    let canStartNewGame = false

    k.add(makeBackground())
    k.add([
        k.sprite('success'),
        k.anchor('center'),
        k.pos(k.center().sub(k.vec2(0, 80))),
        k.scale(0.7)
    ])

    k.add([
        k.text("CONGRATS! YOU BEAT THE GAME!", { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(0, 100))),
        k.z(10)
    ])

    k.add([
        k.text("CONGRATS! YOU BEAT THE GAME!", { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(-5, 105))),
        k.color([0, 0, 0]),
        k.opacity(0.5),
        k.z(5)
    ])

    k.add([
        k.text("YOU CAN HAVE YOUR BRAGGING RIGHTS.", { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(0, 150))),
        k.z(10)
    ])

    k.add([
        k.text("YOU CAN HAVE YOUR BRAGGING RIGHTS.", { font: 'saptami_arcade', size: 24 }),
        k.anchor('center'),
        k.pos(k.center().add(k.vec2(-5, 155))),
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
