import styled, { keyframes } from 'styled-components';
import Circle from './Circle';
import React, { useState } from 'react';

function App() {
  const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor}
  `;
  const Title = styled.h1`
    color: ${props => props.theme.textColor};
  `;
  const Box = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    width: 100px;
    height: 100px;
  `;
  const Hello = styled.h1`
    color: white;
  `;
  // const Circle = styled(Box)`
  //   border-radius: 50px;
  // `;
  const Input = styled.input.attrs({ required: true })`
    background-color: tomato;
  `;
  const animation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        border-radius: 100px;
    }
    100% {
        transform: rotate(360deg);
        border-radius: 0px;
    }
  `;
  const Emoji = styled.span`
    font-size: 36px;
  `;
  const TomatoBox = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animation} 1s linear infinite;
    ${Emoji}:hover {
        font-size: 98px;
    }
  `;

  const [value, setValue] = useState<string>("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello, ", value);
  }

  return (
    <div>
      <Circle backgroundColor="teal" borderColor="yellow" />
      <Circle backgroundColor="tomato" />
      <form onSubmit={onSubmit}>
        <input
            value={value}
            type="text"
            placeholder="username"
            onChange={onChange}
        />
      </form>
    </div>
  );
}

export default App;
