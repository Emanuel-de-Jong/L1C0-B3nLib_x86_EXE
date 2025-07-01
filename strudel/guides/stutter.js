samples('https://raw.githubusercontent.com/Emanuel-de-Jong/L1C0-B3nLib_x86_EXE/main/assets/audio/strudel.json')

setcpm(120/4)

$: s("vl_not_enough_minerals:3")
  .chop(10)
  .clip(.5)
  .room(.3)
