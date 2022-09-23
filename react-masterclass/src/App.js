import styled, { keyframes } from 'styled-components';

function App() {
  const Wrapper = styled.div`
    display: flex;
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
  const TomatoBox = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animation} 1s linear infinite;
    span {
        font-size: 36px;
        &:hover {
        font-size: 48px;
        }
        &:active {
        opacity: 0;
        }
    }
  `

  return (
    <Wrapper>
        <Box bgColor="teal">
            <Hello>Hello</Hello>
        </Box>
        <Circle bgColor="tomato" />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <TomatoBox>
            <span>🤩</span>
        </TomatoBox>
    </Wrapper>
  );
}

export default App;
