import k from "..";

export const makeBackground = () => {
    const background = k.make([
        k.sprite('floor', { tiled: true, height: k.height(), width: k.width() }),
        k.scale(1)
    ])

    return background
}
