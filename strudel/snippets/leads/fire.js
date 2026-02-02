$: note(`<
    [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2] [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2]
    [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2] [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2]
    [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2] [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2]
    [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2] [b1 - b1 - - b1 - - b1 - b1 - - b1 - -] [b1 - b1 - - b1 - - b1 - b2 - c3 a2 - b2]>`)
  .sound("bd:1 bd:0 bd:1 bd:0")

$: note(`<
    [b2,d4,f#4,b3] [a2,a3,e4,c#4] [e2,g3,b3,e3] [d2,d3,f#3,a3]
    [b3,f#4,d4,b2] [c#4,e4,a3,a2] [e3,b3,g3,e2] [a3,f#3,d3,d2]>`)
  .sound("piano")
  .clip(.12)
  .echo(6, 1/6, .8)
  .fast(16)
  .lpf(perlin.rangex(800, 4000)).lpq(10)
  .gain(1.2)
