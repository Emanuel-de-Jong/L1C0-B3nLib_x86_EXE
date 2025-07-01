// "TrackTrusion" @by GVbot

setcpm(138/4)

const ROOT_NOTE = 'E'
const SCALE_TYPE = ':dorian'
const SCALE = ROOT_NOTE + '3' + SCALE_TYPE

let drums = note("[D2 E2]*2")
  .s("[bd:1 bd:1]*2")
  .bank("RolandTR909")
  .lpf(2000)
  .lps(.7)
  .release(.8)

let triplets = n("[~ -5 0 0]*4"
    .add("<2 -3 -1 <0 1>>"))
  .scale(ROOT_NOTE + '2' + SCALE_TYPE)
  .s("sawtooth, sine")
  .lpf(150)
  .lpd(.3)
  .distort(.6)
  .postgain(0.6)

let pads = n(`<
    [0 2] [1 -3] [-1 1] [2 4]
    [0 2] [1 -3] [-1 1] [4 2]
    [0 2] [1 -3] [-1 1] [2 4]
    [0 2] [1 -3] [4 2] [1 0]>`
      .add("-4, -2, 0"))
  .scale(ROOT_NOTE + '4' + SCALE_TYPE)
  .s("sine")
  .fm(1)
  .fmh(1)
  .clip(2.5)
  .room(.1)
  .attack(.3)
  .release(.1)
  .early(1/16)
  .postgain(0.15)
  .lpf(6000)
  .hpf(500)

$: drums
$: triplets
$: pads
