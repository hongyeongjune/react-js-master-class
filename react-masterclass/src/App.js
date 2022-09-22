import styled from 'styled-components';

function App() {
  const Father = styled.div`
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
  `

  return (
    <Father>
      <Box bgColor="teal">
        <Hello>Hello</Hello>
      </Box>
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
