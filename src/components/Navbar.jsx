import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    width: 100vw;
    height: 60px;
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 999;

    @media (max-width: 320px){
        width: 100%;
        padding: 5px;
        height: 30px;
        position: fixed;
        top: 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 60px;
    @media (max-width: 320px){
        padding: 5px;
        margin: 0 30px;
    }

`;

const Left = styled.div`    
`;

const Logo = styled.h2`
    color: #55516C;
    cursor: pointer;
    @media (max-width: 320px) {
        font-size: 18px;
        margin-right: 20px;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const RightItem = styled.a`
    margin-right: 50px;
    border: ${props=>props.contact && '2px solid #55516C'};
    padding: ${props=>props.contact && '10px'};
    border-radius: ${props=>props.contact && '5px'};
    font-weight: bold;
    cursor: pointer;
    color: inherit;
    text-decoration: none;

    &:hover{
        color: #DC9F40;
    }

    @media (max-width: 320px) {
        display: none;
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
                    <RightItem href="#home">
                        Home
                    </RightItem>
                    <RightItem href="#about">
                        About Us
                    </RightItem>
                    <RightItem href="#testimonials">
                        Testimonials
                    </RightItem>
                    <RightItem contact href="#contact">
                        Contact Us
                    </RightItem>
                    
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
