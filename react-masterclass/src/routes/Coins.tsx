import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.backgroundColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface CoinsProps {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins, setCoins] = useState<CoinsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getCoins = async () => {
        const resp = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
        setCoins(resp.slice(0, 100));
        setLoading(false);
    }

    useEffect(() => {
        getCoins();
    })

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {loading && <Loader>Loading...</Loader>
            }
            {!loading &&
                <CoinsList>
                    {
                        coins.map((coin) => (
                            <Coin key={coin.id}>
                                <Link to={`/${coin.id}`} state={{name: coin.name}}>
                                    <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                    {coin.name} &rarr;
                                </Link>
                            </Coin>
                        ))
                    }
                </CoinsList>
            }
        </Container>
    );
}

export default Coins;