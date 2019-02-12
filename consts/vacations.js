export const vacations = [
  new Date(2019, 0, 3), //From prev year
  new Date(2019, 0, 4), //From prev year

  new Date(2019, 1, 7),

  new Date(2019, 2, 21),
  new Date(2019, 2, 22),

  new Date(2019, 3, 29),
  new Date(2019, 3, 30),
  new Date(2019, 4, 3),

  new Date(2019, 5, 26),
  new Date(2019, 5, 27),
  new Date(2019, 5, 28),

  new Date(2019, 7, 12),
  new Date(2019, 7, 13),
  new Date(2019, 7, 14),
  new Date(2019, 7, 16),

  new Date(2019, 9, 30),
  new Date(2019, 9, 29),
  new Date(2019, 9, 28),

  new Date(2019, 11, 23),
  new Date(2019, 11, 24),
  new Date(2019, 11, 27),
  new Date(2019, 11, 30),
  new Date(2019, 11, 31),
]

const vacationsPerYear = 21;
const pastVacations = 11;

export function vacationsLeft() {
  return (vacationsPerYear + pastVacations) - vacations.length
}