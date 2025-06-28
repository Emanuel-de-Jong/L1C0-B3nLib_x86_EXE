setcpm(138/4)

$: note("[c eb g <f bb>](3,8,<0 1>)".sub(12))
  .s("sawtooth")
  
  // Acid sound
  .lpf(sine.range(400,2000).slow(16))
  .lpq(sine.range(7,10).slow(32))
  .lpenv(perlin.range(1,8).slow(2))
  
  // Reverb to hear it better
  .ftype('24db')
  .release(.5)
  .room(sine.range(.5,1).slow(32))
