import k from "../kaboom";

export const makeBackground = () => {
    const background = k.make([
        k.sprite('floor', { tiled: true, height: k.height(), width: k.width() }),
        k.scale(5)
    ])

    return background
}
