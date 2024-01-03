import k from "../kaboom";
import { makeBackground } from "../objects/background";

const healthBar = (initialHealth, totalHealth) => {
    let currentHealth = initialHealth
    return {
        id: 'healthBar',
        draw() {
            let width = 170 * currentHealth / totalHealth
            if (width === 0) {
                width = 10
            }

            k.drawRect({
                width: 180,
                height: 30,
                color: k.rgb(229, 24, 18),
                anchor: 'center'
            })

            k.drawRect({
                width: width,
                height: 20,
                color: k.rgb(47, 224, 35),
                anchor: 'left',
                pos: k.vec2(-170 / 2, 0)
            })
        },
        setHealth(health) {
            currentHealth = health
        }
    }
}

k.scene("debug", () => {
    const background = k.add(makeBackground())

    const healthComp = k.add([
        k.pos(k.center()),
        healthBar(4, 4)
    ])

    k.onMousePress(() => {
        healthComp.setHealth(2)
    })
})
