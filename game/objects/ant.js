import k from '../kaplay'


const MAXIMUM_SPEED = 200
const MAXIMUM_FAST_SPEED = 400

export const makeAnt = (normalSpeed, fastSpeed) => {
    const center = k.center()
    const position = k.vec2(k.randi(k.width()), 0)

    let isFast = false
    let isTop = false
    let speed = Math.min(normalSpeed, MAXIMUM_SPEED)

    if (k.chance(0.1)) {
        isFast = true
        speed = Math.min(fastSpeed, MAXIMUM_FAST_SPEED)
    }

    let dy = k.randi(56, 96)

    if (k.chance(0.5)) {
        isTop = true
        position.y = -dy
    } else {
        position.y = k.height() + dy
    }

    const ant = k.make([
        k.pos(position),
        k.anchor('center'),
        k.area({ shape: new k.Rect(k.vec2(0), 32, 80) }),
        k.body(),
        k.z(10),
        k.state("alive", ["alive", "dead", "poison"]),
        'ant'
    ])

    const antShadow = ant.add([
        k.sprite('ant_shadow'),
        k.anchor('center'),
        isTop ? k.pos(3, 12) : k.pos(-3, 12),
        k.scale(2),
        k.opacity(0.5)
    ])

    const antBody = ant.add([
        k.sprite(isFast ? 'ant_dark' : 'ant'),
        k.anchor('center'),
        k.scale(2),
        k.opacity(),
        k.z(10)
    ])

    const antHitbox = ant.add([
        k.anchor('center'),
        k.area({ shape: new k.Rect(k.vec2(0), 80, 80), collisionIgnore: '*' }),
        k.pos(0, 0),
        k.body(),
        "antHitbox"
    ])

    ant.onStateEnter('alive', () => {
        antBody.play('alive')
    })

    ant.onStateUpdate("alive", () => {
        const position = ant.pos
        const direction = k.center().sub(position).unit()
        let angle = -Math.atan((center.x - position.x) / (center.y - position.y)) * 180 / Math.PI

        if (isTop) {
            angle = angle - 180
        }
        ant.angle = angle
        ant.move(direction.scale(speed))
    })

    ant.onStateEnter("dead", () => {
        antBody.play('dead')
        ant.use(k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }))

        const blood = ant.add([
            k.anchor('center'),
            k.sprite('ant_blood'),
            k.opacity(0.5),
            k.scale(2),
            'blood'
        ])

        blood.onUpdate(() => {
            blood.opacity = blood.opacity - k.dt() / 3
            if (blood.opacity <= 0) {
                blood.destroy()
            }
        })
    })

    ant.onStateEnter("poison", () => {
        antBody.play('poison')
        ant.use(k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }))

        const poison = ant.add([
            k.pos(k.vec2(0, -20)),
            k.anchor('center'),
            k.sprite('ant_poison'),
            k.opacity(0.5),
            k.scale(2),
            'poison'
        ])

        poison.onUpdate(() => {
            poison.opacity = poison.opacity - k.dt() / 3
            if (poison.opacity <= 0) {
                poison.destroy()
            }
        })
    })

    ant.onStateUpdate("dead", () => {
        antBody.opacity -= k.dt() / 3
        antShadow.opacity -= k.dt() / 3


        if (antBody.opacity <= 0) {
            ant.destroy()
        }
    })

    ant.onStateUpdate("poison", () => {
        antBody.opacity -= k.dt() / 3
        antShadow.opacity -= k.dt() / 3

        if (antBody.opacity <= 0) {
            ant.destroy()
        }
    })
    return ant
}
