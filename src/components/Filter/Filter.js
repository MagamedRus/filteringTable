import React, { useState } from "react";
import { typesCol, typesFilter } from "../../constants/filter.js";
import Select from "../Select/Select.js";
import styles from "./Filter.module.scss";

function Filter({ confirmFilters }) {
  const [filterObj, setFilterObj] = useState({
    typeFilter: null,
    valueFilter: null,
    typeCol: null,
  });

  const [errStates, setErrStates] = useState({});

  let inputTimer;

  const setTypeFilter = (state) => {
    setFilterObj((prevState) => ({ ...prevState, typeFilter: state }));
    setErrStates((prevState) => ({ ...prevState, typeFilter: false }));
  };
  const setTypeCol = (state) => {
    setFilterObj((prevState) => ({ ...prevState, typeCol: state }));
    setErrStates((prevState) => ({ ...prevState, typeCol: false }));
  };
  const setValueFilter = (state) => {
    setFilterObj((prevState) => ({ ...prevState, valueFilter: state }));
    setErrStates((prevState) => ({ ...prevState, valueFilter: false }));
  };

  // Optimizing input
  const onTextInput = (ev) => {
    inputTimer && clearTimeout(inputTimer);
    inputTimer = setTimeout(() => setValueFilter(ev.target.value), 200);
  };

  const clear = () => {
    setTypeFilter(null);
    setValueFilter(null);
    setTypeCol(null);
  };

  const confirm = () => {
    let isErr = false;

    /** checking all inputs on 'isEmpty' */
    Object.keys(filterObj).forEach((key) => {
      if (!filterObj[key]) {
        setErrStates((prevState) => ({ ...prevState, [key]: true }));
        isErr = true;
      } else {
        setErrStates((prevState) => ({ ...prevState, [key]: false }));
      }
    });
    if (!isErr) {
      confirmFilters(filterObj);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Фильтры</h1>
      <div className={styles.row}>
        <h2>Колонка</h2>
        <Select
          placeholder={"Выберите колонку"}
          isErr={errStates.typeCol}
          options={typesCol}
          value={filterObj.typeCol}
          setValue={setTypeCol}
        />
      </div>
      <div className={styles.row}>
        <h2>Условие</h2>
        <Select
          placeholder={"Выберите условие"}
          isErr={errStates.typeFilter}
          options={typesFilter}
          value={filterObj.typeFilter}
          setValue={setTypeFilter}
        />
      </div>
      <div className={styles.row}>
        <h2>Значение</h2>
        <input
          maxLength={20}
          placeholder={"Введите значение..."}
          className={`${styles.input} ${
            errStates.valueFilter ? styles.errInput : ""
          }`}
          onInput={onTextInput}
        />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={clear}>
          Очистить
        </button>
        <button className={styles.btn} onClick={confirm}>
          Применить
        </button>
      </div>
    </div>
  );
}

export default Filter;
