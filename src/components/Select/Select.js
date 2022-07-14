import React, { useState } from "react";
import styles from "./Select.module.scss";

function Select({ options, value, setValue, placeholder, isErr }) {
  const [isVisible, setVisible] = useState(false);
  const reverseVisible = () => setVisible((prev) => !prev);

  const chooseValue = (value) => {
    reverseVisible();
    setValue(value);
  };

  return (
    <>
      {/* Select */}
      <div
        className={`${styles.select} ${isErr ? styles.errBorder : ""}`}
        onClick={reverseVisible}
      >
        <p className={value ? styles.valuedP : styles.unValuedP}>
          {value || placeholder || "Выберите значение"}
        </p>
      </div>

      {/* Drop list (options) */}
      <div className={isVisible ? styles.options : styles.hideOptions}>
        {options.map((option) => (
          <button key={option.id} onClick={() => chooseValue(option.value)}>
            {option.value}
          </button>
        ))}
      </div>
    </>
  );
}

export default Select;
