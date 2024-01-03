import k from ".."

export const makeScore = () => {
    const score = k.make([
        k.text(0, { font: 'saptami_arcade', size: 50 }),
        k.anchor("center"),
        k.pos(k.width() / 2, 40),
        k.fixed(),
        k.z(100),
        {
            value: 0
        }
    ])

    return score
}
