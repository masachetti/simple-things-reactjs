import { Time } from "../types/types";

function parseBinaryToDecimal(binaryValue: string) {
    let reversedBits = binaryValue.split("").reverse();
    let decimal = 0;
    for (const [bitIndex, bit] of reversedBits.entries()) {
        let intBit = parseInt(bit);
        decimal += bitIndex ? bitIndex ** 2 * intBit : intBit;
    }
    return decimal;
}

function parseStringToBinary(value: string) {
    let decimalValue = parseInt(value);
    let bitArray: number[] = [];
    while (decimalValue > 1) {
        bitArray.push(decimalValue % 2);
        decimalValue = Math.floor(decimalValue / 2);
    }
    bitArray.push(decimalValue);
    return bitArray.reverse().join('')
}

function parseTimeToString({ minutes, seconds }: Time): string {
    const makeRepr = (v: number) => v >= 10 ? "" + v : "0" + v;
  
    return makeRepr(minutes) + " : " + makeRepr(seconds)
  }
  
export {parseBinaryToDecimal, parseStringToBinary, parseTimeToString};