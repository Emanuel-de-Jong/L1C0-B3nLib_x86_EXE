samples('shabda/speech:forever')

$: sound("[- hh]*8")

$: sound("forever*2")
  .fit()
  .slice(7, "1 2 1 3 5 3 <5 2> <4 2>")
  .fast(2)
