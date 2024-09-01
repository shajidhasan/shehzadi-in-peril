import k from "./kaplay"

import logo from "./assets/sprites/logo.png"
import ant from "./assets/sprites/ant.png"
import floor from "./assets/sprites/floor.png"
import princess from "./assets/sprites/princess.png"
import game_over from "./assets/sprites/game_over.png"
import ant_dark from "./assets/sprites/ant_dark.png"
import ant_blood from "./assets/sprites/ant_blood.png"
import ant_poison from "./assets/sprites/ant_poison.png"
import ant_shadow from "./assets/sprites/ant_shadow.png"
import princess_shadow from "./assets/sprites/princess_shadow.png"

import die from "./assets/sounds/die.mp3"
import ouch from "./assets/sounds/ouch.mp3"
import splat from "./assets/sounds/splat.mp3"

import saptami_arcade from "./assets/fonts/saptami_arcade.ttf"

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

k.loadSprite("ant", ant, {
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

k.loadSprite("ant_dark", ant_dark, {
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
k.loadSprite("ant_shadow", ant_shadow)
k.loadSprite("ant_blood", ant_blood)
k.loadSprite("ant_poison", ant_poison)
k.loadSprite("princess_shadow", princess_shadow)

k.loadFont("saptami_arcade", saptami_arcade)

k.loadSound("splat", splat)
k.loadSound("ouch", ouch)
k.loadSound("die", die)
