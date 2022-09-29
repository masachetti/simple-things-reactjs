
function parseToDecimal(binaryValue: string) {
    let reversedBits = binaryValue.split("").reverse();
    let decimal = 0;
    for (const [bitIndex, bit] of reversedBits.entries()) {
        let intBit = parseInt(bit);
        decimal += bitIndex ? bitIndex ** 2 * intBit : intBit;
    }
    return decimal;
}

function parseToBinary(value: string) {
    let decimalValue = parseInt(value);
    let bitArray: number[] = [];
    while (decimalValue > 1) {
        bitArray.push(decimalValue % 2);
        decimalValue = Math.floor(decimalValue / 2);
    }
    bitArray.push(decimalValue);
    return bitArray.reverse().join('')
}

export {parseToDecimal, parseToBinary};