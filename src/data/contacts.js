// Funkcija za stvaranje jedinstvenog identifikatora (skoro pa jedinstven, biramo nasumični broj od 0 do 10000000)
function dohvatiNasumičniIdentifikator() {
  return Math.floor(Math.random() * 10000000);
}

// Novi tip podatka koji predstavlja osobu
export function Osoba(
  name,
  lastName,
  dateOfBirth,
  number,
  address,
  city,
  category
) {
  this.name = name;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.number = number;
  this.address = address;
  this.city = city;
  this.category = category;

  // Pri kreiranju osobe svaka osoba dobije svoj jedinstveni identifikator
  this.id = dohvatiNasumičniIdentifikator();
}

export let contacts = [
  new Osoba(
    "Ivo",
    "Ivić",
    "12.05.1999",
    "156181554",
    "Moja Kuca 1",
    "Split",
    "Red"
  ),
  new Osoba(
    "Ante",
    "Lukač",
    "12.05.1959",
    "15132131554",
    "Moja Kuca 2",
    "Split",
    "Green"
  ),
  new Osoba(
    "Josip",
    "Horvat",
    "12.05.1989",
    "153231554",
    "Moja Kuca 3",
    "Zagreb",
    "Green"
  ),
  new Osoba(
    "Luka",
    "Horvat",
    "12.05.1699",
    "15313554",
    "Moja Kuca 4",
    "Osijek",
    "Red"
  ),
  new Osoba(
    "Mate",
    "Horvat",
    "12.05.1969",
    "1561232554",
    "Moja Kuca 5",
    "Split",
    "Red"
  ),
];
