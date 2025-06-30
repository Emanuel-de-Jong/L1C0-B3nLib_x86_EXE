// NOTES/SAMPLES
// Melody
$: n(irand(8).segment(4))
  .scale("C:pentatonic")
  .ribbon(35, 4)
  .fast(2)
  ._punchcard()

$: n(run(8)
    .degradeBy(.2)
    .ribbon(32, 4))
  .scale("D:pentatonic")
  .s("sawtooth")
  ._punchcard()

// Drums
$: s("bd!8")
  .n(irand(5))
  .ribbon(321, 2)
  ._punchcard()

// RHYTHM
// Drums
$: s("bd*4, hh*8")
  .lpf(rand.range(500,8000))
  .ribbon(4312, 2)
  ._punchcard()

$: s("hh*8")
  .mask(brandBy(0.8))
  .ribbon(0, 2)
  ._punchcard()

$: s("bd")
  .segment(16)
  .degradeBy(.5)
  .ribbon(16,1)
