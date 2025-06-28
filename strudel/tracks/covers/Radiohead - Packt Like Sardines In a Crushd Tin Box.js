//"something like 'Packt Like Sardines In a Crushd Tin Box - Radiohead' "
const banka = "<alesishr16 mpc60 tr808>*0.420"
const banka2 = "alesissr16"

let a = s("<[rim ~@2 rim ~@4] [rim ~@2 [~ rim] rim!2 ~@2] >").bank(banka).almostNever(x=>x.ply(2)).velocity("[.9 .3]*8").room(.2).delay(.2).gain(.5).orbit(2)._scope()
let abd = s("<[~ [~ bd] ~ ~ [~ bd] ~ bd bd]!2 [[bd <bd ~> <~ bd> ~  ~ ~ ~ bd]*2]!2>").bank(banka2).gain(.4).lpf(1000)._scope()

let b = s("bd sd ~ sd").bank(banka2).almostNever(x=>x.ply(2)).room(.2).gain(.4)._scope()
let c =  s("[~ hh]*4 ").bank(banka).rarely(x=> x.ply(2)).velocity("[.9 .3]*8") ._scope()
let d = note("<[a3@3 g3@5]!3 [c3 d3@2 a2@5]>").penv("1 0@7").sound("sawtooth").transpose("<0 [-2@3 -1@5] [-3@3 -3@5] 0>").transpose(-12).room(.2).delay(.3
).phaser(.1)._scope()//.midi('MODEL 15')

let e = note("[a6] @4").s("gm_drawbar_organ").lpf(500).gain(1.5)._scope()
let f = note("<[e4@3 d4@5] [d4@2 e4 c4@5] [d4@3 c4@4 a3@9]@2 [e4@3 d4@5] [d4@2 e4 c4@5] [d4@3 c4@4 a3@7 a3 b3]@2  [[c4]!3 b3@3 b3 a3@2 a3@2 a3@3 b3 a3@2 a3@2 a3@3 b3 a3@9]@4 >").sound("gm_lead_7_fifths").penv(".5 0@7")._scope()
                                                              
let a1 = stack(a, abd)
let a2 = stack(a, b, abd)
let a3 = stack(a, b, c, abd)
let a4 = stack(a, b, c, d, e, abd)
let a5 = stack(a, b, c, d, e, f, abd)

arrange([2,a1],[2,a2],[4,a3],[8,a4],[16,a5])
