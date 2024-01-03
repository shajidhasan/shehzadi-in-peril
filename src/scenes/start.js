import k from "../kaboom"
import { makeBackground } from "../objects/background"
import { makePrincess } from "../objects/princess"

k.scene("start", () => {
    const IS_DESKTOP = k.height() < k.width()
    const CAMERA_SCALE = IS_DESKTOP ? 1.5 : 2.5
    const CAMERA_POSITION = k.center().add(k.vec2(0, IS_DESKTOP ? 100 : 80))

    let starting = false

    k.add(makeBackground())
    k.add(makePrincess(true))

    k.camScale(CAMERA_SCALE)
    k.camPos(CAMERA_POSITION)

    const logo = k.add([
        k.sprite('logo'),
        k.scale(IS_DESKTOP ? 0.3 : 0.2),
        k.anchor('center'),
        k.opacity(),
        k.pos(k.center().add(0, IS_DESKTOP ? 200 : 180)),
        k.z(200)
    ])

    const prompt = k.add([
        k.text("TAP ANYWHERE TO START", { font: 'saptami_arcade', size: IS_DESKTOP ? 30 : 20 }),
        k.anchor('center'),
        k.pos(k.center().add(0, IS_DESKTOP ? 300 : 250)),
        k.opacity(),
        { blinkTimer: 0 },
    ])

    prompt.onUpdate(() => {
        prompt.blinkTimer += k.dt();

        if (prompt.blinkTimer >= 0.8) {
            prompt.opacity = (prompt.opacity === 1) ? 0 : 1;
            prompt.blinkTimer = 0;
        }
    })

    onMousePress(() => {
        if (starting) return
        starting = true

        const tw = k.tween(
            CAMERA_SCALE,
            1,
            1,
            (val) => k.camScale(val),
            k.easings.easeOutSine,
        )

        k.tween(
            CAMERA_POSITION,
            k.center(),
            1,
            (val) => k.camPos(val),
            k.easings.easeOutSine,
        )

        k.tween(
            1,
            0,
            1,
            (val) => {
                logo.opacity = val
            },
            k.easings.easeOutSine
        )

        tw.onEnd(() => {
            k.go('game')
        })
    })

})