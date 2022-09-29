import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouterState {
    name: string;
}

function Coin() {
    const location = useLocation();
    const state = location.state as RouterState;
    // const [loading, setLoading] = useState(true);

    console.log(location);

    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
        </Container>
    );
}

export default Coin;