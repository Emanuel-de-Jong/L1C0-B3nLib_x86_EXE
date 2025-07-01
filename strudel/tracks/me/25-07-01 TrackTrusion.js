// "TrackTrusion" @by GVbot

setcpm(138/4)

const ROOT_NOTE = 'C#'
const SCALE_TYPE = ':major'

let drums = note("[D2 E2]*2")
  .s("[bd:1 bd:1]*2")
  .bank("RolandTR909")
  .lpf(2000)
  .lps(.7)
  .release(.8)

let triplets = n("[~ -5 0 0]*4"
    .add("<2 -3 -1 <0 -2>>"))
  .scale(ROOT_NOTE + '2' + SCALE_TYPE)
  .s("sawtooth, sine")
  .lpf(150)
  .lpd(.3)
  .distort(.7)
  .postgain(0.8)

// $: n(`<
// [1 [[1 1 ~] 1] ~ [1 -2]] [0 [[0 0 ~] 0] ~ ~]
// [0 [[0 0 ~] 0] ~ [0 -2]] [-1 [[-1 -1 ~] -1] ~ [-1 0]]
// [1 [[1 1 ~] 1] ~ [1 2]] [0 [[0 0 ~] 0] ~ ~]
// [0 [[0 0 ~] 0] ~ [0 -2]] [-1 [[-1 -1 ~] -1] ~ [-1 0]]
// >`)
//   .scale("C#:major")
//   .piano()

const SUPPORT_WAVE = "sawtooth"
let support = n(`<
    [0@7 1] -1
    -1 -2
    [0@7 3] -1
    [-1@7 -2] 0
    [0@7 1] -1
    -1 -2
    [0@7 3] [-1@7 -2]
    [-1@7 -2] 0>`)
  .scale(ROOT_NOTE + '2' + SCALE_TYPE)
  .layer(
    x=>x.s(SUPPORT_WAVE)
      .pan(tri.range(.2, .8).slow(1)),
    x=>x.s(SUPPORT_WAVE)
      .add(note(sine.range(.1, .3).slow(2)))
      .pan(tri.range(.2, .8).slow(1.5)),
    x=>x.s(SUPPORT_WAVE)
      .add(note(sine.range(.2, .4).slow(3)))
      .pan(tri.range(.2, .8).slow(2)))
  .fm(1)
  .fmh(3)
  .postgain(0.7)

let lead = n(`<
    [[0 ~ 2 ~] [4 ~] [2 1@2 ~]]
    [[2 ~] [1 0@2 ~] [-1 0@2 ~]]
    >`)
  .scale(ROOT_NOTE + '3' + SCALE_TYPE)
  .layer(
    x=>x.s("sawtooth")
      .fm(1)
      .fmh(1)
      .gain(.5)
    ,x=>x.s("sine")
      .add("-7")
      .late(1/32)
      .gain(.4)
    ,x=>x.s("triangle")
      .add("-1, 0, 1")
      .gain(.3)
      .distort(.4)
  )
  .delay(".5:.4:.1")
  .postgain(.8)

$: drums
$: triplets
$: support
// $: lead
