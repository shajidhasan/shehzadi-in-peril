import k from "../kaboom"

export const makeScore = () => {
    const score = k.make([
        text(0, { font: 'saptami_arcade', size: 120 }),
        anchor("center"),
        pos(width() / 2, 80),
        fixed(),
        z(100),
        {
            value: 0
        }
    ])

    return score
}
