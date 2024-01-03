import k from "../kaboom";
import { makeBackground } from "../objects/background";
import { makeAlien } from "../objects/alien";
import { makePrincess } from "../objects/princess";
import { makeScore } from "../objects/score";

const NORMAL_SPEED_INCREMENT = 5
const FAST_SPEED_INCREMENT = 7.5
const INITIAL_NORMAL_SPEED = 100
const INITIAL_FAST_SPEED = 500
const INITIAL_WAIT_TIME = 1
const WAIT_TIME_DECREMENT = 0.01
const MINIMUM_WAIT_TIME = 0.05


k.scene("game", () => {
    let normalSpeed = INITIAL_NORMAL_SPEED
    let fastSpeed = INITIAL_FAST_SPEED
    let waitTime = INITIAL_WAIT_TIME

    k.add(makeBackground())
    const princess = k.add(makePrincess())
    const score = k.add(makeScore())

    const spawnAlien = () => {
        const alien = k.add(makeAlien(normalSpeed, fastSpeed))

        alien.onStateEnter('dead', () => {
            score.value++
            score.text = score.value
        })

        k.wait(Math.max(waitTime, MINIMUM_WAIT_TIME), spawnAlien)
        waitTime -= WAIT_TIME_DECREMENT
        normalSpeed += NORMAL_SPEED_INCREMENT
        fastSpeed += FAST_SPEED_INCREMENT
    }

    princess.onDeath(async () => {
        await wait(1)
        k.go('over', score.value)
    })

    spawnAlien()
})
