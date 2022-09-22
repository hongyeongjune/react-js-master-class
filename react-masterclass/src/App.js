import styled from 'styled-components';

function App() {
  const Father = styled.div`
    display: flex;
  `;
  const BoxOne = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
  `;
  const BoxTwo = styled.div`
    background-color: tomato;
    width: 100px;
    height: 100px;
  `;
  const Hello = styled.h1`
    color: white;
  `;

  return (
    <Father>
      <BoxOne>
        <Hello>Hello</Hello>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
