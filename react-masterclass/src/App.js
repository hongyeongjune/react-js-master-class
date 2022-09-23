import styled, { keyframes } from 'styled-components';

function App() {
  const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  `;
  const Box = styled.div`
    background-color: ${props => props.bgColor};
    width: 100px;
    height: 100px;
  `;
  const Hello = styled.h1`
    color: white;
  `;
  const Circle = styled(Box)`
    border-radius: 50px;
  `;
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

  return (
    <Wrapper>
        <TomatoBox>
            <Emoji>🤩</Emoji>
        </TomatoBox>
        <Emoji>⭐️</Emoji>
    </Wrapper>
  );
}

export default App;
