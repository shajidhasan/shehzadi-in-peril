import k from "../kaplay";
import { makeBackground } from "../objects/background";
import { makeAnt } from "../objects/ant";
import { makePrincess } from "../objects/princess";
import { makeScore } from "../objects/score";

const NORMAL_SPEED_INCREMENT = 0.4
const FAST_SPEED_INCREMENT = 0.4
const INITIAL_NORMAL_SPEED = 100
const INITIAL_FAST_SPEED = 300
const INITIAL_WAIT_TIME = 1
const WAIT_TIME_DECREMENT = 0.006
const MINIMUM_WAIT_TIME = 0.3


k.scene("game", () => {
    let normalSpeed = INITIAL_NORMAL_SPEED
    let fastSpeed = INITIAL_FAST_SPEED
    let waitTime = INITIAL_WAIT_TIME

    k.add(makeBackground())
    const princess = k.add(makePrincess())
    const score = k.add(makeScore())

    const spawnAnt = () => {
        const ant = k.add(makeAnt(normalSpeed, fastSpeed))

        ant.onStateEnter('dead', () => {
            score.value++
            score.text = score.value
        })

        k.wait(Math.max(waitTime, MINIMUM_WAIT_TIME), spawnAnt)
        waitTime -= WAIT_TIME_DECREMENT
        normalSpeed += NORMAL_SPEED_INCREMENT
        fastSpeed += FAST_SPEED_INCREMENT
    }

    princess.onDeath(async () => {
        await k.wait(1)
        k.go('over', score.value)
    })

    spawnAnt()

    k.onClick('antHitbox', (hitbox) => {
        const ant = hitbox.parent
        if (ant.state === 'dead' || ant.state === 'poison') return
        ant.enterState('dead')
        k.play('splat', { volume: 0.4 })
    })
})
