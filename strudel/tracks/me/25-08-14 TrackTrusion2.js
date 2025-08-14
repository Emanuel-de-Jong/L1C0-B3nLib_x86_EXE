// "TrackTrusion" @by GVbot

setcpm(138/4)

const ROOT_NOTE = 'F#'
const SCALE_TYPE = ':major'

let kick = note("[D2 E2]*2")
  .s("[bd:1 bd:1]*2")
  .bank("RolandTR909")
  .lpf(2000)
  .lps(.7)
  .release(.8)

let triplets = n("[~ -5 0 0]*4"
    .add("<0 2 4 -2>"))
  .scale(ROOT_NOTE + '2' + SCALE_TYPE)
  .s("sawtooth, sine")
  .lpf(150)
  .lpd(.3)
  .distort(.7)
  .postgain(0.8)

const BASS_WAVE = "sawtooth"
let bass = n(`<
    0 2 4 -2
    >`)
  .scale(ROOT_NOTE + '2' + SCALE_TYPE)
  .layer(
    x=>x.s(BASS_WAVE)
      .pan(tri.range(.2, .8).slow(1))
    ,x=>x.s(BASS_WAVE)
      .add(note(sine.range(.1, .3).slow(2)))
      .pan(tri.range(.2, .8).slow(1.5))
    ,x=>x.s(BASS_WAVE)
      .add(note(sine.range(.2, .4).slow(3)))
      .pan(tri.range(.2, .8).slow(2)))
  .attack(.4)
  .release(.4)
  // .early(.3)
  .lpf(800)
  .postgain(.4)

let support = n(`<
    0 -2 -4 2
    >`)
  .scale(ROOT_NOTE + '4' + SCALE_TYPE)
  .s("piano")
  .postgain(1)

const LEAD_WAVE = "sawtooth"
let lead = n(`<
    [0 ~]
    [2 [2 0]]
    [4 [-2 0]]
    [-2 [2 ~]]
    >`)
  .scale(ROOT_NOTE + '3' + SCALE_TYPE)
  .echo(3, 1/6, .5)
  .clip(.6)
  .attack(.025)
  .lpf(perlin.rangex(2000, 15000).slow(1.5))
  .lpenv(perlin.range(1,6).slow(2))
  .add("-7, 0, 7")
  .layer(
    x=>x.s(LEAD_WAVE)
    ,x=>x.s(LEAD_WAVE)
      .late(.0001)
      .gain(.5)
    ,x=>x.s(LEAD_WAVE)
      .late(.0002)
      .gain(.25)
    ,x=>x.s("sine")
      .gain(.5))
  .room(1)
  .postgain(.3)

$: kick
$: triplets
$: bass
// $: support
$: lead
