$: stack(
  n("[2 4 6 8]*4")
  .scale("C:minor")
  .sound('sawtooth')
  .lpf(slider(0.868,0,1).range(200,2000))
  .gain("[2 1.5 1.5 1.5]*4")
  .pan(sine.range(.25,.75))
  ,
  n("2/2")
  .scale("C2:minor")
  .gain("<17 13 22 19>")
  .lpf(700)
  .sound('z_sine')
)  
.transpose("<0 0 -5 -5>")  
.room(slider(1.5,0,2).hpf(400))
.cpm(35)

$: sound("[bd hh hh sd ~ hh sd ~]*2").cpm(35).room(.2).gain(.3).lpf(slider(1,0,1).range(500,3000))
