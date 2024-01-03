import k from "../kaboom"

export const makeScore = () => {
    const score = k.make([
        k.text(0, { font: 'saptami_arcade', size: 120 }),
        k.anchor("center"),
        k.pos(width() / 2, 80),
        k.fixed(),
        k.z(100),
        {
            value: 0
        }
    ])

    return score
}
