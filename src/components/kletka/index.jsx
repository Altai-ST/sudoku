import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchColor } from "../../store/reducers";
import InputKletka from "../costomInput";
import Switches from "../switches";
import { dataNum, dataNum2, dataNum2Game, dataNum3, dataNum3Game, dataNum4, dataNum4Game, dataNumGame } from "./dataNum";
import styled from "./kletka.module.scss";

export default function Kletka() {
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const [answer, setAnswer] = useState('')

  const [correct, setCorrect] = useState(true)

  const [gen, setGen] = useState({
    data: dataNum,
    newData: dataNumGame,
  })

  const [popitki, setPopitki] = useState(0)
  const [finish, setFinish] = useState({
    hideNum:20,
    finish:1,
    fin:false,
  })

  const dispatch = useDispatch();
  const checkNum = useSelector((state) => state.sudoku.number);
  

  useEffect(() => {
    if (checkNum.id !== 0) {
      if (gen.data[checkNum.id - 1].num[checkNum.newId] === Number(checkNum.num)) {
        setAnswer('Верно')
        setFinish({...finish, finish: finish.finish+1})
        setCorrect(true)
        console.log(finish.finish)
        if(finish.finish === finish.hideNum){
          setFinish({...finish, fin: true})
        }
      }else{
        setAnswer('Не верно')
        setCorrect(false)
        setPopitki(popitki+1)
      }
    }
  }, [checkNum]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state.checkedB);
    if (state.checkedB === false) {
      dispatch(switchColor("sky"));
    } else {
      dispatch(switchColor("gray"));
    }
  };

  const handleClick=()=>{
    if(gen.data === dataNum){
      setGen({...gen, data: dataNum2, newData: dataNum2Game})
      setPopitki(0)
      setFinish({...finish, fin: false})
      setAnswer('')
    }else if(gen.data === dataNum2){
      setGen({...gen, data: dataNum3, newData: dataNum3Game})
      setFinish({...finish, fin: false})
      setPopitki(0)
      setAnswer('')
    }else if(gen.data === dataNum3){
      setGen({...gen, data: dataNum4, newData: dataNum4Game})
      setFinish({...finish, fin: false})
      setPopitki(0)
      setAnswer('')
      setFinish({...finish, hideNum: 28})
    }else{
      setGen({...gen, data: dataNum, newData: dataNumGame})
      setFinish({...finish, fin: false})
      setPopitki(0)
      setAnswer('')
      setFinish({...finish, hideNum: 20})
    }
  }

  const handleClear=()=>{
    document.location.reload();
  }

  return (
    <div className={styled.mainBlock}>
      <div className={styled.container}>
        {gen.newData.map((el) => {
          return (
            <div key={el.toString()} className={styled.numBlock}>
              {el.num.map((nums) => {
                return (
                  <div
                    key={nums.toString()}
                    id={el.id.toString() + el.num.indexOf(nums).toString()}
                    className={styled.kletka}
                  >
                    <InputKletka
                      num={nums}
                      id={el.id}
                      newId={el.num.indexOf(nums)}
                      hide={setFinish}
                      fin={finish}
                      hideNum={finish.hideNum}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styled.settings}>
        <h2>Настройки</h2>
        <div className={styled.settingsGame}>
          <button className={styled.generation} onClick={handleClick}>Генерация</button>
          <span>Тема:</span>
          <Switches handleChange={handleChange} state={state} />
        </div>
        <button className={styled.clear} onClick={handleClear}>Clear</button>
        {/* <p>Ответ: <span className={correct ? styled.answer : styled.redAnswer}>{answer}</span></p>
        <p>Попытки: <span>{Math.round(popitki/2)}</span></p> */}
        {finish.fin ? <div>
          <p className={styled.finish}>Поздравляю вы выиграли!!!</p>
        </div> : finish.finish === 20 ? <div>
          <p className={styled.lose}>Попробуйте снова :(</p>
        </div> : ''}
      </div>
    </div>
  );
}
