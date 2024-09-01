import k from "../kaplay";
import { makeBackground } from "../objects/background";
import { makeAnt } from "../objects/ant";
import { makePrincess } from "../objects/princess";
import { makeScore } from "../objects/score";
import { levels } from "../levels";

k.scene("game", () => {
    k.add(makeBackground())
    const princess = k.add(makePrincess())
    const score = k.add(makeScore())

    let start = k.time()
    let currentLevel = 0
    let level = levels[currentLevel]
    let completed = false

    const spawnAnt = () => {
        const timePassed = k.time() - start

        if (timePassed > level.duration) {
            currentLevel++
            start = k.time()
            if (currentLevel === levels.length) {
                completed = true
                return
            } else {
                level = levels[currentLevel]
            }
        }

        const ant = k.add(makeAnt(level.normalSpeed, level.blackSpeed, level.blackProbability))

        ant.onStateEnter('dead', () => {
            score.value++
            score.text = score.value
        })

        k.wait(level.timeGap, spawnAnt)
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

    k.onDestroy('ant', () => {
        if (completed) {
            if (k.get('ant').length === 0)
                k.go('success')
        }
    })
})
