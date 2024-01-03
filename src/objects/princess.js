import k from '../kaboom'
import { makeHealth } from './health'

export const makePrincess = (dummy = false) => {
    const princess = k.make([
        k.pos(k.center()),
        k.anchor('center'),
        k.health(4),
        k.area({ shape: new k.Rect(k.vec2(0), 80, 200) }),
        k.body({ isStatic: true }),
        k.state('idle', ['idle', 'scream']),
        k.z(100)
    ])

    princess.add([
        k.sprite('princess_shadow'),
        k.anchor('center'),
        k.pos(-20, 100),
        k.scale(5),
    ])

    const princessBody = princess.add([
        k.sprite('princess'),
        k.scale(5),
        k.anchor('center'),
    ])

    if (dummy) {
        princessBody.play('idle')
        return princess
    }

    const healthBar = princess.add(makeHealth())

    princess.onCollide('alien', (alien) => {
        if (princess.hp() === 0) return
        princess.hurt(1)
        healthBar.setHealth(princess.hp())
        princess.enterState('scream')
        alien.enterState('poison')
        if (princess.hp() > 0) {
            k.play('ouch', { volume: 0.4 })
        } else {
            k.play('die', { volume: 0.4 })
        }
    })

    princess.onStateEnter('scream', async () => {
        princessBody.play('scream')
        await k.wait(1)
        princess.enterState('idle')
    })

    princess.onStateEnter('idle', async () => {
        princessBody.play('idle')
    })

    princess.onDeath(() => {
        princessBody.play('scream')
    })

    return princess
}

