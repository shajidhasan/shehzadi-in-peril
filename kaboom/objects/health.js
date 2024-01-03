import k from "..";

const healthBar = (initialHealth, totalHealth) => {
    let currentHealth = initialHealth
    return {
        id: 'healthBar',
        draw() {
            const width = 40 * currentHealth / totalHealth

            k.drawRect({
                width: 44,
                height: 8,
                color: k.rgb(229, 24, 18),
                anchor: 'center'
            })

            k.drawRect({
                width: width,
                height: 4,
                color: k.rgb(47, 224, 35),
                anchor: 'left',
                pos: k.vec2(-40 / 2, 0)
            })
        },
        setHealth(health) {
            currentHealth = health
        }
    }
}

export const makeHealth = () => {
    const health = k.make([
        k.pos(k.vec2(0, -30)),
        k.anchor('center'),
        healthBar(4, 4)
    ])

    return health
}
