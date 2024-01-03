import k from '../kaboom'

export const makeAlien = (normalSpeed, fastSpeed) => {
    const center = k.center()
    const position = k.vec2(k.randi(k.width()), 0)

    let isFast = false
    let isTop = false
    let speed = normalSpeed

    if (k.chance(0.1)) {
        isFast = true
        speed = fastSpeed
    }

    let dy = randi(140, 240)

    if (k.chance(0.5)) {
        isTop = true
        position.y = -dy
    } else {
        position.y = k.height() + dy
    }

    const alien = k.make([
        k.pos(position),
        k.anchor('center'),
        k.area({ shape: new k.Rect(k.vec2(0), 80, 200) }),
        k.body(),
        k.rotate(), ,
        k.z(10),
        k.state("alive", ["alive", "dead", "poison"]),
        'alien'
    ])

    const alienShadow = alien.add([
        k.sprite('alien_shadow'),
        k.anchor('center'),
        isTop ? k.pos(8, 30) : k.pos(-8, 30),
        k.scale(5),
        k.opacity(0.5)
    ])

    const alienBody = alien.add([
        k.sprite(isFast ? 'alien_dark' : 'alien'),
        k.anchor('center'),
        k.scale(5),
        k.opacity(),
        k.z(10)
    ])

    const alienHitbox = alien.add([
        k.anchor('center'),
        k.area({ shape: new k.Rect(k.vec2(0), 200, 200), collisionIgnore: '*' }),
        k.pos(0, 0),
        k.body()
    ])

    alien.onStateEnter('alive', () => {
        alienBody.play('alive')
    })

    alien.onStateUpdate("alive", () => {
        const position = alien.pos
        const direction = k.center().sub(position).unit()
        let angle = -Math.atan((center.x - position.x) / (center.y - position.y)) * 180 / Math.PI

        if (isTop) {
            angle = angle - 180
        }

        alien.move(direction.scale(speed))
        alien.rotateTo(angle)
    })

    alien.onStateEnter("dead", () => {
        alienBody.play('dead')
        alien.use(k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }))

        const blood = alien.add([
            k.anchor('center'),
            k.sprite('alien_blood'),
            k.opacity(0.5),
            k.scale(5),
            'blood'
        ])

        blood.onUpdate(() => {
            blood.opacity = blood.opacity - k.dt() / 3
            if (blood.opacity <= 0) {
                blood.destroy()
            }
        })
    })

    alien.onStateEnter("poison", () => {
        alienBody.play('poison')
        alien.use(k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }))

        const poison = alien.add([
            k.pos(k.vec2(0, -50)),
            k.anchor('center'),
            k.sprite('alien_poison'),
            k.opacity(0.5),
            k.scale(5),
            'poison'
        ])

        poison.onUpdate(() => {
            poison.opacity = poison.opacity - k.dt() / 3
            if (poison.opacity <= 0) {
                poison.destroy()
            }
        })
    })

    alien.onStateUpdate("dead", () => {
        alienBody.opacity -= k.dt() / 3
        alienShadow.opacity -= k.dt() / 3


        if (alienBody.opacity <= 0) {
            alien.destroy()
        }
    })

    alien.onStateUpdate("poison", () => {
        alienBody.opacity -= k.dt() / 3
        alienShadow.opacity -= k.dt() / 3

        if (alienBody.opacity <= 0) {
            alien.destroy()
        }
    })


    alienHitbox.onClick(() => {
        if (alien.state === 'dead') return
        alien.enterState('dead')
        k.play('splat', { volume: 0.4 })
    })

    return alien
}
