import k from "./kaboom"

import "./scenes/start"
import "./scenes/game"
import "./scenes/over"
import "./scenes/debug"
import "./assets"

k.audioCtx.resume()
k.go("start")
