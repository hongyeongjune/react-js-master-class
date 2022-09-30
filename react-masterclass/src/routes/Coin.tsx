import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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

interface RouterStateProps {
    name: string;
}

function Coin() {
    const state = useLocation().state as RouterStateProps;
    const { coinId } = useParams();
    const [loading, setLoading] = useState(true);
    const [coin, _setCoin] = useState({});
    const [price, _setPrice] = useState({});

    const setCoin = async () => {
        const coinResp = await ( await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
        const priceResp = await ( await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
        _setCoin(coinResp);
        _setPrice(priceResp);
    }

    useEffect(() => {
        setCoin();
    }, []);

    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
        </Container>
    );
}

export default Coin;