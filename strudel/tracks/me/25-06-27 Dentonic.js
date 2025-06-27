$: n(run(8).degradeBy(.2).ribbon(slider(32, 10, 100), 4))
  .scale("D:pentatonic")
  .s("sawtooth")
  .release(0.5)
  .phaser(2).phasersweep("4000")
  ._punchcard()

$: s("[[[[[hh] oh] hh, hh] hh] hh]")

$: s("sd*4").gain(.6)
