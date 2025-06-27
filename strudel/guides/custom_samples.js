samples('https://raw.githubusercontent.com/Emanuel-de-Jong/L1C0-B3nLib_x86_EXE/main/assets/audio/strudel.json')

setcpm(120/4)

// $: n("0 1 2").s("vl_not_enough_minerals")

$: n(irand(3)).struct("x x*2 x x*3").ribbon(20, 2).s("vl_not_enough_minerals")
