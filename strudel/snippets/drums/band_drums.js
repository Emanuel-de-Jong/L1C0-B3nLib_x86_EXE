setCpm(120/4)

const dbank = "tr909"
$: sound("bd(<5 7>,16)")
  .bank(dbank)
  ._punchcard()

$: sound("sd")
  .beat("4,12", 16)
  .bank(dbank)
  ._punchcard()

$: sound("hh!8")
  .n("[0 | 1]*8")
  .sometimesBy(.2, x => x.ply("2"))
  .gain(.4)
  ._punchcard()
