/*
n(CHANCE_PER_SAMPLE_VARIATION)
  .bank(DRUM_BANK).fast(RHYTHM_CHANCES_SIZE).ribbon(SAMPLE_VARIATION_SEED, CYCLES_BEFORE_REPEAT)
  .s(wchooseCycles(["SAMPLE ~",ON_BEAT_CHANCE],["~ SAMPLE",OFF_BEAT_CHANCE],["~ ~",PLAY_CHANCE]))
  .fast(SLOTS_IN_CYCLE).ribbon(RHYTM_SEED, CYCLES_BEFORE_REPEAT)

RHYTHM_CHANCES_SIZE: The amount of samples + silences in a rhythm wchooseCycles item
PLAY_CHANCE: Needs to be modified when SLOTS_IN_CYCLE is changed.
*/

setcpm(120/4)

const DRUM_BANK = "RolandTR909"
let bassDrum = n(wchooseCycles([0,3],[1,1],[2,0],[3,0],[4,0],[5,0]))
  .bank(DRUM_BANK).fast(2).ribbon(slider(0, 0, 1024, 32), 4)
  .s(wchooseCycles(["bd ~",3],["~ bd",1],["~ ~",3])).fast(4).ribbon(slider(0, 0, 1024, 32), 2)
let snareDrum = n(wchooseCycles([0,3],[1,1],[2,0],[3,0],[4,0],[5,0]))
  .bank(DRUM_BANK).fast(2).ribbon(slider(32, 0, 1024, 32), 4)
  .s(wchooseCycles(["sd ~",1],["~ sd",3],["~ ~",3])).fast(4).ribbon(slider(32, 0, 1024, 32), 4)
let closedHiHat = n(wchooseCycles([0,1],[1,1],[2,0],[3,0],[4,0],[5,0]))
  .bank(DRUM_BANK).fast(2).ribbon(slider(64, 0, 1024, 32), 4)
  .s(wchooseCycles(["hh hh",1],["hh ~",2],["~ hh",2],["~ ~",1])).fast(8).ribbon(slider(64, 0, 1024, 32), 4)
let openHiHat = n(wchooseCycles([0,1],[1,0],[2,0],[3,0],[4,0],[5,0]))
  .bank(DRUM_BANK).fast(2).ribbon(slider(128, 0, 1024, 32), 4)
  .s(wchooseCycles(["oh ~",1],["~ oh",2],["~ ~",38])).fast(8).ribbon(slider(128, 0, 1024, 32), 4)
let rimShot = n(wchooseCycles([0,1],[1,0],[2,0],[3,0],[4,0],[5,0]))
  .bank(DRUM_BANK).fast(1).ribbon(slider(160, 0, 1024, 32), 4)
  .s(wchooseCycles(["rim",1],["~",11])).fast(8).ribbon(slider(160, 0, 1024, 32), 8)
let clap = n(wchooseCycles([0,1],[1,0],[2,0],[3,0],[4,0],[5,0]))
  .bank(DRUM_BANK).fast(1).ribbon(slider(192, 0, 1024, 32), 4)
  .s(wchooseCycles(["cp",1],["~",4])).fast(4).ribbon(slider(192, 0, 1024, 32), 8)
let crashCymbal = n(wchooseCycles([0,1],[1,1],[2,1],[3,1],[4,1],[5,1]))
  .bank(DRUM_BANK).fast(4).ribbon(slider(224, 0, 1024, 32), 4)
  .s(wchooseCycles(["~!3 cr",1],["~!4",3])).fast(1).ribbon(slider(224, 0, 1024, 32), 4)
let drums = stack(
  bassDrum
  ,snareDrum
  ,closedHiHat
  ,openHiHat
  ,rimShot
  ,clap
  ,crashCymbal
)
$: drums
