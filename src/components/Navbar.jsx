import styled from 'styled-components'
import { useState } from 'react'
import cross from '../images/cross.png'
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
const Humbergur = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    opacity: 0;
    @media (max-width: 320px) {
        opacity: 1;
        margin-right: 35px;
    }
`;
const Line = styled.span`
    width: 100%;
    height: 2px;
    background-color: black;
    margin-bottom: 7px;
`;
const DropDown = styled.div`
    background-color: #1a1919;
    width: 170px;
    height: 200px;
    position: absolute;
    top: 60px;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    opacity: 0;
    @media (max-width: 320px) {
        opacity: 1;
        width: 100%;
        height: 568px;
        padding: 0;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }
`;
const DropItem = styled.a`
    color: white;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 20px;
`;
const Cross = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    opacity: 0;
    @media (max-width: 320px) {
        opacity: 1;
        margin-right: 35px;
    }
`;
const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleClick = ()=>{
        setActive(!active)
    }
    console.log(active)
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
                    {active ? (
                        <Cross src={cross} alt="" onClick={handleClick}/>
                        ):(
                        <>
                            <Humbergur onClick={handleClick}>
                                <Line></Line>
                                <Line></Line>
                                <Line></Line>
                            </Humbergur>
                        </>
                        )}
                </Right>
                {active &&
                <DropDown onClick>
                    <DropItem href="#home">
                        Home
                    </DropItem>
                    <DropItem href="#about">
                        About Us
                    </DropItem>
                    <DropItem href="#testimonials">
                        Testimonials
                    </DropItem>
                    <DropItem contact href="#contact">
                        Contact Us
                    </DropItem>
                </DropDown>
                }
            </Wrapper>
        </Container>
    )
}

export default Navbar
