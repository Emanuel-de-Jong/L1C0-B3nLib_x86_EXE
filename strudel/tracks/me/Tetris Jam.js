setcpm(120/4)

const melody = `<
  [e5 [b4 c5] d5 [c5 b4]]
  [a4 [a4 c5] e5 [d5 c5]]
  [b4 [~ c5] d5 e5]
  [c5 a4 a4 ~]
  [[~ d5] [~ f5] a5 [g5 f5]]
  [e5 [~ c5] e5 [d5 c5]]
  [b4 [b4 c5] d5 e5]
  [c5 a4 a4 ~]
>`

stack(
  note(melody)
    .s("piano")
    .add("-8,8")
    .room("1")
    .lpf(sine.range(400, 2000).slow(4))
  
  ,note(melody)
    .s("piano")
    .sub("8,16")
    .rev()
    .gain(0.4)
  
  ,note(`<
    [[e2 e3]*4]
    [[a2 a3]*4]
    [[g#2 g#3]*2 [e2 e3]*2]
    [a2 a3 a2 a3 a2 a3 b1 c2]
    [[d2 d3]*4]
    [[c2 c3]*4]
    [[b1 b2]*2 [e2 e3]*2]
    [[a1 a2]*4]
  >`).s("gm_acoustic_bass")
    .chord("<Am C D F Am E Am E>").voicing()
    .sometimesBy(.2, x => x.ply("2"))
    .gain(0.8)
)
