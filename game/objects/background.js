import k from "../kaplay";

export const makeBackground = () => {
    const background = k.make([
        k.sprite('floor', { tiled: true, height: k.height(), width: k.width() }),
        k.scale(1.5)
    ])

    return background
}
