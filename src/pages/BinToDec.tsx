import React, { useState } from "react";

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
  while (decimalValue > 1){
    bitArray.push(decimalValue%2);
    decimalValue = Math.floor(decimalValue/2);
  }
  bitArray.push(decimalValue);
  return bitArray.reverse().join('')
}

export default function BinToDec() {
  const [value, setValue] = useState({
    currentValue: "0",
    valueFormat: "dec",
  });

  const handleValueChange = function (e: React.ChangeEvent<HTMLInputElement>, format: string) {
    setValue({
      currentValue: e.target.value,
      valueFormat: format,
    });
  };
  const { currentValue, valueFormat } = value;
  const binValue =
    valueFormat === "bin" ? currentValue : parseToBinary(currentValue);
  const decValue =
    valueFormat === "dec" ? currentValue : parseToDecimal(currentValue);

  return (
    <div>
      <label htmlFor="binary">Binary: </label>
      <input
        id="binary"
        type="text"
        value={binValue}
        onChange={(e) => handleValueChange(e, "bin")}
      />
      <br />
      <label htmlFor="dec">Decimal: </label>
      <input
        id="dec"
        type="text"
        value={decValue}
        onChange={(e) => handleValueChange(e, "dec")}
      />
    </div>
  );
}
