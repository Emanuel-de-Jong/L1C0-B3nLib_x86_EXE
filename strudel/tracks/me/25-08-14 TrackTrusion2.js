// "TrackTrusion" @by GVbot
setcpm(138/4)

const ROOT_NOTE = 'F#'
const SCALE_TYPE = ':major'

let prekick = note("D2*16")
  .s("bd:1")
  .bank("RolandTR909")
  .lpf(2000)
  .lps(.7)
  .hpf(400)
  .gain(.6)

let kick = note("[D2 E2]*2")
  .s("[bd:1 bd:1]*2")
  .bank("RolandTR909")
  .lpf(2000)
  .lps(.7)
  .release(.8)
  .gain(1)

let triplets = n("[~ -5 0 0]*4"
    .add("<0 -4 -6 -2 2 -3 -5 -2>"))
  .scale(ROOT_NOTE + '2' + SCALE_TYPE)
  .s("sawtooth, sine")
  .lpf(150)
  .lpd(.3)
  .distort(.7)
  .gain(0.8)

const BASS_WAVE = "sawtooth"
let bass = n(`<
    0 -4 -6 -2 2 -3 -5 -2
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
  .gain(.4)

const LEAD_WAVE = "sawtooth"

let prelead = n(`<
    [[0 0] [0 2]]
    [[-4 -4] [-4 -4]]
    [[-6 -6] [-4 0]]
    [[0 -2] [-2 -2]]
    [[2 2] [2 4]]
    [[-3 -3] [-3 -3]]
    [[-5 -5] [-3 2]]
    [[-2 -2] [-2 -2]]
    
    [[0 0] [0 2]]
    [[-4 -4] [-4 -4]]
    [[-6 -6] [-4 0]]
    [[0 -2] [-2 -2]]
    [[0 0] [0 2]]
    [[0 0] [0 2]]
    [[0 0] [0 2]]
    [[0 0] [0 2]]
    >`)
  .scale(ROOT_NOTE + '3' + SCALE_TYPE)
  .clip(.8)
  .release(.4)
  .attack(.1)
  .lpf(700)
  .lpenv(perlin.range(1,6).slow(2))
  .add("-7, 0, 7")
  .layer(
    x=>x.s(LEAD_WAVE)
    ,x=>x.s("sine")
      .gain(.5))
  .room(.4)
  .gain(.4)

let lead = n(`<
    [[0 0 [0 0]] [0 [0 2] 2]]
    [[-4 -4 [-4 -4]] [-4 [-4 -4] -4]]
    [[-6 -6 [-6 -6]] [-4 [-4 0] 0]]
    [[0 0 [-2 -2]] [-2 [-2 -2] -2]]
    [[2 2 [2 2]] [2 [2 4] 4]]
    [[-3 -3 [-3 -3]] [-3 [-3 -3] -3]]
    [[-5 -5 [-5 -5]] [-3 [-3 2] 2]]
    [[-2 -2 [-2 -2]] [-2 [-2 -2] -2]]
    >`)
  .scale(ROOT_NOTE + '3' + SCALE_TYPE)
  .echo(3, 1/6, .5)
  .clip(.6)
  .attack(.02)
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
  .gain(.12)

// $: bass
// $: triplets
// $: prelead
// $: lead
// $: prekick
// $: kick

$: stack (
  bass.postgain(`<
      .4 .6 .75 1
      1!3 .75
      .6 .75 1!2
      1!4
      1!4
      1!4
      1!4
      1 1.2 1.8 2.4
      1!4
      1!4
      [.94 .88 .81 .75] [.69 .63 .56 0.5] [.44 .38 .31 .25] [.19 .13 .06 0]
      0!4
      0!4
      >`)
    .mask("<1!44 0!8>")
  ,triplets.postgain(`<
      0!4
      0!4
      [.2 .4 .2 .3] [.4 .6 .5 .5] [.7 .7 .6 .8] .9
      1!4
      1!4
      1!4
      1!4
      0
      1!4
      1!4
      [.94 .88 .81 .75] [.69 .63 .56 0.5] [.44 .38 .31 .25] [.19 .13 .06 0]
      0!4
      0!4
      >`)
    .mask("<0!8 1!20 0!4 1!12 0!8>")
  ,prelead.postgain(`<
      0!4
      0!4
      0!4
      0!4
      [.2 .3] [.4 .5] [.5 .4] [.3 .5]
      [.5 .7] [.7 .7] .8!2
      1!4
      1!4
      0!4
      0!4
      0!4
      0!4
      0!4
      >`)
    .mask("<0!16 1!16 0!20>")
    .lpf(`<
      700!28
      [800 900] [1000 1200] [1400 1600] [2000 2600]
      0!20
      >`)
  ,lead.postgain(`<
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      1!4
      1!4
      [.94 .88 .81 .75] [.69 .63 .56 0.5] [.44 .38 .31 .25] [.19 .13 .06 0]
      0!4
      0!4
      >`)
    .mask("<0!32 1!12 0!8>")
  ,prekick.mask(`<
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      [1 0!15] 0 [1 0!15] 0
      [[1 0!3]!4]!2 [[1 0]!8] 1
      0!4
      0!4
      0!4
      0!4
      0!4
      >`)
    .delay(`<
      [.5:.4:.3]!28
      0!24
      >`)
  ,kick.mask(`<
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      0!4
      1!4
      1!4
      0!4
      0!4
      0!4
      >`)
).punchcard()
