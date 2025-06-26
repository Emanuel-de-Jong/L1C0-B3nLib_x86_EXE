setcpm(140/4)

stack(
  sound("bd*4, [- cp]*2, [- hh - hh:2]*2")
    .bank("RolandTR909")
    .gain(0.8)
  
  ,n(`<
      [0 [2 4] ~ 0 [2 4] 5 3 2]
      [2 [4 6] ~ 0 [2 -] 5 3 2]
      [0 [2 4] ~ 0 [2 4] 5 3 2]
      [[4 0] ~ -1 ~ [-1 -2] -2 2 0]>`)
    .scale("E2:minor")
    .sound("square")
    .room(0.5)
  
  ,n(`<
      [0 [2 4] ~ 0 [2 4] 5 ~ ~]
      [2 [4 6] ~ 0 [2 -] 5 ~ ~]
      [0 [2 4] ~ 0 [2 4] 5 ~ ~]
      [[4 0] ~ -1 ~ [-1 -2] -2 2 0]>`)
    .clip(.5)
    .release(.2)
    .scale("E2:minor")
    .sound("sawtooth")
    .clip(4)
    .gain(0.3)
  
  ,sound(`<
      [rim*3 ~]
      [~ rim*3]>`)
    .bank("ViscoSpaceDrum")
    .lpf("<3000 10000>")
    .gain(0.6)
    .fast(2)
)
