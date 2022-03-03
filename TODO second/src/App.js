import React, { useState } from 'react';
import "./App.css";
import Form from './components/Form';
import Lists from './components/Lists';


export default function App() {

  // Functional Component state 정의 방법
  // state 객체 요소마다 아래 문법으로 변수 정의
  // 이제 객체 내부 요소가 아니므로 모든 메소드 구조 제거 
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  
    // submit 시 새로운 데이터 생성 및 배열에 추가하며 state 업데이트
    const handleSubmit = (e) => {
      e.preventDefault(); // form의 value 값을 input 할 때 페이지 리로드 막아줌
      // 새로운 할일 데이터 생성
      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      };
      //원래 할 일에 새로운 데이터 더해주기 : 전개 연산자 DeepCopy //submit 후 form의 value 값 비우기
      setTodoData((prev)=>[...prev,newTodo]); //Setter에서 이전 state 필요시 함수형식 사용
      setValue("")
    };
  
    return (
      <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
        <div className='w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between mb-3'>
            <h1>할 일 목록</h1>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData} /> 
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
          
        </div>
      </div>
    );
  }

