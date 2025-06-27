sine.range(min,max) // Automatic change.
slider(current, min, max, step)
sine saw square tri // Automation waveforms.

// EFFECTS
.jux(func) // Second sound with added effect.
.lpenv(slider(0, 0, 8)) // Common muffled to bright.
.ribbon(seed, length_in_cycles) // Random uses ribbon. Creates consistent loop.
.pan(number) // Left or right speaker. 0 - 1 (left).

// PATTERN
/*
1!2 // Same as: 1 1
1*2 // Same as: [1 1]
1@2 // Plays twice as long.
1/2 // Plays every second loop.
{}%4 // Switch 4 times per cycle.
*/

// VISUALIZATION (without `_` is fullscreen)
_punchcard() // Notes how they are at the end.
_pianoroll() // Notes how they are at that line.
_scope() // Sound wave.
_spectrum() // Punchcard with full sound spectrum instead of notes.
