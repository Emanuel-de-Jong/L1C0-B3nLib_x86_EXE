// MINIMAL
await initHydra()

osc(1)
  .out()

// TEMPLATE
await initHydra({feedStrudel:1})

src(s0)
  .kaleid(H("<4 8>"))
  .diff(osc(1,0.5,5))
  .out()

all(x=>x.fft(1).scope({pos:0,smear:0.5}))

// FEATURE SHOWCASE
await initHydra({feedStrudel:1})

let pattern = "3 4 5 [6 7]"
src(s0)
  .kaleid(H(pattern))
  .diff(osc(1,0.5,5))
  .out()

$: n(pattern)
  .scale("A:minor")
  .sound("piano")

all(x=>x.fft(5).scope({pos:0,smear:0.5}))
