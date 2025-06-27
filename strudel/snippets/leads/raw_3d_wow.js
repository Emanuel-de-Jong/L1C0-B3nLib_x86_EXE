setcpm(120/4)

const wave = "sawtooth"
$: note("<g1 bb1 d2 f1>")
  .layer(
    x=>x.s(wave)
      .pan(tri.range(.2, .8).slow(1)),
    x=>x.s(wave)
      .add(note(sine.range(.1, .3).slow(2)))
      .pan(tri.range(.2, .8).slow(1.5)),
    x=>x.s(wave)
      .add(note(sine.range(.2, .4).slow(3)))
      .pan(tri.range(.2, .8).slow(2)))
  .scope()

// Mono version
$: note("<g1 bb1 d2 f1>")
  .add(note("0, .1, .2"))
  .s("sawtooth")
  .scope()
