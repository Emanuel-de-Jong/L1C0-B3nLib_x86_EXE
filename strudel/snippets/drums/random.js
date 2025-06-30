const DRUM_BANK = "RolandTR909"
let bassDrum = s("[bd bd?0.5]*4").bank(DRUM_BANK)
  .degradeBy(.5).ribbon(slider(0, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(0, 0, 1024, 32), 4)
let snareDrum = s("[sd?0.5 sd]*4").bank(DRUM_BANK)
  .degradeBy(.5).ribbon(slider(32, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(32, 0, 1024, 32), 4)
let closedHiHat = s("hh!8").bank(DRUM_BANK)
  .degradeBy(.2).ribbon(slider(64, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(64, 0, 1024, 32), 4)
let openHiHat = s("oh!16").bank(DRUM_BANK)
  .degradeBy(.95).ribbon(slider(96, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(96, 0, 1024, 32), 4)
let rimShot = s("[rim?0.5 rim]*4").bank(DRUM_BANK)
  .degradeBy(.8).ribbon(slider(128, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(128, 0, 1024, 32), 4)
let rideCymbal = s("rd!8").bank(DRUM_BANK)
  .degradeBy(.2).ribbon(slider(160, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(160, 0, 1024, 32), 4)
let crashCymbal = s("cr!8").bank(DRUM_BANK)
  .degradeBy(.2).ribbon(slider(192, 0, 1024, 32), 4)
  .n(wchoose([0,3],[1,1],[2,0],[3,0],[4,0],[5,0])).ribbon(slider(192, 0, 1024, 32), 4)
let drums = stack(
  bassDrum
  ,snareDrum
  ,closedHiHat
  ,openHiHat
  ,rimShot
  ,rideCymbal
  ,crashCymbal
)
$: drums
