import k from "./kaboom"

k.loadSprite("princess", "/sprites/princess.png", {
    sliceX: 3,
    anims: {
        "idle": {
            from: 0,
            to: 1,
            speed: 2,
            loop: true,
        },
        "scream": 2
    },
})

k.loadSprite("alien", "/sprites/alien.png", {
    sliceX: 5,
    anims: {
        "alive": {
            from: 0,
            to: 3,
            speed: 5,
            loop: true,
        },
        "dead": 4,
        "poison": 1
    },
})

k.loadSprite("alien_dark", "/sprites/alien_dark.png", {
    sliceX: 5,
    anims: {
        "alive": {
            from: 0,
            to: 3,
            speed: 5,
            loop: true,
        },
        "dead": 4,
        "poison": 1
    },
})

k.loadSprite("floor", "/sprites/floor.png")
k.loadSprite("princess_shadow", "/sprites/princess_shadow.png")
k.loadSprite("alien_shadow", "/sprites/alien_shadow.png")
k.loadSprite("alien_blood", "/sprites/alien_blood.png")
k.loadSprite("alien_poison", "/sprites/alien_poison.png")
k.loadSprite("logo", "/sprites/logo.png")
k.loadSprite("game_over", "/sprites/game_over.png")

k.loadFont("saptami_arcade", "/fonts/saptami_arcade.ttf")

k.loadSound("splat", "/sounds/splat.mp3")
k.loadSound("ouch", "/sounds/ouch.mp3")
k.loadSound("die", "/sounds/die.mp3")

k.loadSound("bgm", "/music/bgm.mp3")
