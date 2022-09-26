import styled from 'styled-components';

interface ContainerProps {
    backgroundColor: string;
    borderColor: string;
}

interface CircleProps {
    backgroundColor: string;
    borderColor?: string;
};

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.backgroundColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

function Circle({ backgroundColor, borderColor }: CircleProps) {
    return (
        <Container backgroundColor={backgroundColor} borderColor={borderColor ?? backgroundColor} />
    );
}

export default Circle;