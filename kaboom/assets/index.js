import k from ".."

import logo from "./sprites/logo.png"
import alien from "./sprites/alien.png"
import floor from "./sprites/floor.png"
import princess from "./sprites/princess.png"
import game_over from "./sprites/game_over.png"
import alien_dark from "./sprites/alien_dark.png"
import alien_blood from "./sprites/alien_blood.png"
import alien_poison from "./sprites/alien_poison.png"
import alien_shadow from "./sprites/alien_shadow.png"
import princess_shadow from "./sprites/princess_shadow.png"

import die from "./sounds/die.mp3"
import ouch from "./sounds/ouch.mp3"
import splat from "./sounds/splat.mp3"

import saptami_arcade from "./fonts/saptami_arcade.ttf"

k.loadSprite("princess", princess, {
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

k.loadSprite("alien", alien, {
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

k.loadSprite("alien_dark", alien_dark, {
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

k.loadSprite("logo", logo)
k.loadSprite("floor", floor)
k.loadSprite("game_over", game_over)
k.loadSprite("alien_shadow", alien_shadow)
k.loadSprite("alien_blood", alien_blood)
k.loadSprite("alien_poison", alien_poison)
k.loadSprite("princess_shadow", princess_shadow)

k.loadFont("saptami_arcade", saptami_arcade)

k.loadSound("splat", splat)
k.loadSound("ouch", ouch)
k.loadSound("die", die)
