import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    padding: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 60px;
`;

const Left = styled.div`
`;

const Logo = styled.h2`
    color: #55516C;
    cursor: pointer;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const RightItem = styled.span`
    margin-right: 50px;
    border: ${props=>props.contact && '2px solid #55516C'};
    padding: ${props=>props.contact && '10px'};
    border-radius: ${props=>props.contact && '5px'};
    font-weight: bold;
    cursor: pointer;

    &:hover{
        color: #DC9F40;
    }
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Personal</Logo>
                </Left>
                <Right>
                    <RightItem>
                        Home
                    </RightItem>
                    <RightItem>
                        About Us
                    </RightItem>
                    <RightItem>
                        Services
                    </RightItem>
                    <RightItem contact>
                        Contact Us
                    </RightItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
