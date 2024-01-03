import k from "..";

const makeCircle = () => {
    const circle = k.make([
        k.pos(k.vec2(k.randi(k.width() - 100), k.randi(k.height()))),
        k.anchor('center'),
        k.rect(100, 200),
        k.color(k.RED),
        k.area(),
        k.rotate(45),
        k.body(),
        'circle'
    ])

    return circle
}

k.scene("debug", () => {
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())
    k.add(makeCircle())

    k.onMousePress(() => {
        const pos = k.mousePos()
        k.debug.log(`pressed: ${pos.y}`)
    })

    k.onClick('circle', (c) => {
        c.destroy()
    })
})
