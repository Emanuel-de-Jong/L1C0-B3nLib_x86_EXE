$: n(`<
    [11@3 11@3 14@3 14@3 16@2 16@2] [10@3 10@3 10@3 10@3 10@2 9@2] [10@3 10@3 10@3 9@3 9@2 9@2] [8@3 8@3 8@3 8@3 8@2 8@2]
    [10@3 10@3 11@3 11@3 13@2 13@2] [9@3 9@3 9@3 9@3 9@2 8@2] [9@3 9@3 9@3 8@3 8@2 8@2] [7@3 7@3 7@3 7@3 7@2 7@2]
    [11@3 11@3 14@3 14@3 16@2 16@2] [10@3 10@3 10@3 10@3 10@2 9@2] [10@3 10@3 10@3 9@3 9@2 9@2] [8@3 8@3 8@3 8@3 8@2 8@2]
    [9@3 9@3 8@3 8@3 6@2 6@2] [7@3 7@3 7@3 7@3 7@2 7@2] [7@3 7@3 7@3 7@3 7@2 7@2] [7@3 7@3 7@3 7@3 7@2 7@2]>`)
  .scale("F#3:minor")
  .sound("<sawtooth square triangle sine white pink brown>")
  .n("16") // Number of harmonic partials. More muffled sound.

  // envelope
  .attack(.1)
  .decay(.1)
  .sustain(.2)
  .release(.2)
  .adsr(".1:.1:.2:.2")

  .shape(.1)
  .dec(0.8)
  .vib(8) // Vibrato speed. Jojo sound.
  .room(.5)
  .echo(2, 1/6, .3)
  .delay(".8:.12") // Also echo
  .segment(4) // Notes per cycle
  .hpf(200) // High pass filter. Removes bass.
  .lpf(2000) // Low pass filter. Removes treble.
  .speed(2) // Faster playback and higher pitch. 
  ._scope()
