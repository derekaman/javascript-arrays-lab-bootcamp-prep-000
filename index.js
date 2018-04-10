const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob);
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop(Garfield);
  return kittens;
}