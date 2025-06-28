sine.range(min,max) // Automatic change.
slider(current, min, max, step)
sine saw square tri // Automation waveforms.

// EFFECTS
.jux(func) // Second sound with added effect.
.lpenv(slider(0, 0, 8)) // Common? muffled to bright. Needs lpf.
.ribbon(seed, length_in_cycles) // Random uses ribbon. Creates consistent loop.
.pan(number) // Left or right speaker. 0 - 1 (left).
.compressor("threshold:ratio:knee:attack:release")
.coarse(4) // Emulate lower bit rate (wave becomes horizontaly pixelated). Distortion, 8-bit, cracling mix.
.cut(1) // Stops the last sample when the next begins.

// PATTERN EFFECTS
.add(note_increase)
.off(cycle_length, x=>other_effect()) // Plays og + new note \w effect later. cycle_length 1/16 is 1/16 of 1 cycle.
.early(1/8) // Offset to just before normal note play.
.late(1/8)

// PATTERN
/*
1!2 // Same as: 1 1
1*2 // Same as: [1 1]
1@2 // Plays twice as long.
1/2 // Plays every second loop.
{}%4 // Polymeter. Switch 4 times per cycle.
{} // Synch up patterns over multiple cycles. e.g. {c2 g2, c eb g}:
   // both are played at the same speed so `c2` matches with `c` then `g` then `eb`
1!4? // Questionmark degrades half randomly. Can be controlled with Ribbon.
*/

// SEQUENCE
run(4) // 0 to n-1 `n(run(4))`

// VISUALIZATION (without `_` is fullscreen)
._punchcard() // Notes how they are at the end.
._pianoroll() // Notes how they are at that line.
._scope() // Sound wave.
._spectrum() // Punchcard with full sound spectrum instead of notes.
