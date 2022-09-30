
interface Time {
  minutes: number,
  seconds: number
}

function convertToTimeString({ minutes, seconds }: Time): string {
  const makeRepr = (v: number) => v >= 10 ? "" + v : "0" + v;

  return makeRepr(minutes) + " : " + makeRepr(seconds)
}

export { convertToTimeString }