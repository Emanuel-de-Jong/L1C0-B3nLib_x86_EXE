samples('shabda/speech:forever')

$: sound("[- hh]*8")

$: sound("forever*2")
  .fit() // fit to pattern (e.g. 1/2 cycle)
  .slice(7, "1 2 3@2 5 4 <5 1> <4 2>") // Slice into 0-6. 0, 6 and 7 not used because silent.
  .fast(2)
