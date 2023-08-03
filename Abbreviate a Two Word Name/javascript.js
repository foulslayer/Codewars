function abbrevName(name) {
  // code away

  FirstInitialLetter = name.charAt(0);
  let space = name.indexOf(" ") + 1;
  let slice = name.slice(space);
  SecondInitialLetter = slice.charAt(0);

  let result = FirstInitialLetter.concat(".", SecondInitialLetter);
  return result;
}

abbrevName("Kasper Kammer");
abbrevName("john wick");
