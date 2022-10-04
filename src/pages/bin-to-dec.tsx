import React, { useState } from "react";
import { parseStringToBinary, parseBinaryToDecimal } from "../utils/parsers";

const BinToDec: React.FC = () => {
  const [value, setValue] = useState({
    currentValue: "0",
    valueFormat: "dec",
  });

  const handleValueChange = function (
    e: React.ChangeEvent<HTMLInputElement>,
    format: string
  ) {
    setValue({
      currentValue: e.target.value,
      valueFormat: format,
    });
  };
  const { currentValue, valueFormat } = value;
  const binValue =
    valueFormat === "bin" ? currentValue : parseStringToBinary(currentValue);
  const decValue =
    valueFormat === "dec" ? currentValue : parseBinaryToDecimal(currentValue);

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
};

export default BinToDec;
