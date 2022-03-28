import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newNum } from "../../store/reducers";
export default function InputKletka(props) {
  const [inputNum, setInputNum] = useState("");

  const dispatch = useDispatch()
  const handleChange = (val) => {
    if(!(val.target.value.match(/^[А-Яа-яA-Za-z ]$/))){
        setInputNum(val.target.value)
        dispatch(newNum({id:props.id, num: val.target.value, newId: props.newId}))
    }
  };

  if (props.num > 10) {
    return (
      <input maxLength="1" className={props.borderColor} onChange={handleChange} type="numeric" value={inputNum} />
    );
  }
  return <span>{props.num}</span>;
}
