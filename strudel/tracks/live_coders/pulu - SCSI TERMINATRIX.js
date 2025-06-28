// @title SCSI TERMINATRIX
// @by pulu

let cps = 142/(4*60)
let scl = 'E dorian'
setcps(cps)

register('clone', (n,f,p) => stack(...Array(n).keys().map(i => f(p,i,i/n))))

kick: s("bd!3 <bd!3 <bd*2 <[bd@3 bd] bd*4>>>").bank("system100")
  .clip(1)
  .shape(0.2).postgain(0.7)

hats: stack(
  s("[hh hh oh hh]*4").bank("tr808")
  .gain(tri.fast(4).range(0.4, 1))
  .ply("1@15 <1!3 2>")
  .decay(0.1).mul(gain(0.6)).clip(1),
  s("[~ oh]*4").bank("tr909").gain(0.3).clip(1).decay(0.2),
  s("cr/8").bank("rolandr8").gain(0.3).decay(0.8),
  s("rd*4").bank("tr909").clip(0.9).gain(0.1).mask("<0 1>/8")
)

snare: "<~ 0>*4".s("sd").bank("tr909")
  .ply("[1 <1!7 4>]*2")
  .hpf(200).decay(0.08)
  .gain(0.7)

bass: n("[~ -7 0 0]*4".add("<2 -3 -1 <0 3>>".early(1/16))).scale(scl)
.s("sawtooth")
.add(note(-12)).lpf(150).lpd(0.05).lpenv(3)
  .superimpose(p => p.add(note(-12)).s("sine").mul(postgain(0.9)))
  .clip(0.9).sustain(1)
  .shape(0.5).postgain(0.8)

lead: n("[0 3@2 4@2]*16/5".add("<0 2 3 2>".add("0 1".mul("<0 1>/8")))).scale(scl).add(note(0)).s("supersaw").clip(rand.fast(1.1).rangex(0.4,0.7))
  .pan(tri.slow(5).range(0.2,0.8))
  .lpf(perlin.rangex(800, 20000))
  .delay(0.4).delaytime(3/16/cps).orbit(2)
  .gain(0.6)
  .superimpose(p => p.add(note(12)).segment("<8 16!2>*8").mask("<0 1>/8"))

vibe:
n("<0 ~>*2".add("<0 1 -3 2 -1>")).scale(scl).s("gm_vibraphone")
.clone("[9|12|15]*2", (p,i,k) => 
  p.late(perlin.fast(5).rangex(1/128, 1/8).mul(i))
  .gain(Math.pow(0.7, i))
  .pan(rand2.mul(k*0.5).add(0.5))
  .scaleTranspose(choose(0,2,4,6))
  .scaleTranspose(choose(-7,0,7))
  .scaleTranspose(choose(-1,0,1,0,3))
  .decay(0.2*Math.pow(0.95,i))
)
.delay(0.4).delaytime(3/16/cps)
.attack(0.001)
.mul(gain(0.8)).orbit(2)
