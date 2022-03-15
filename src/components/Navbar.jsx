import styled from 'styled-components'
import { useState } from 'react'
import cross from '../images/cross.png'
import { Link } from 'react-scroll'
const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 60px;
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 999;
    @media screen and (max-width: 425px){
        padding: 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 60px;
    @media screen and (max-width: 425px){
        padding: 5;
        margin: 0 10px;
    }

`;

const Left = styled.div`    
`;

const Logo = styled.h2`
    color: #55516C;
    cursor: pointer;
    font-size: 2.5rem;
    @media screen and (max-width: 425px){
        font-size: 2rem;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const RightItem = styled.span`
    font-size: 1.8rem;
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
    width: 3rem;
    height: 30px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
    @media screen and (max-width: 425px){
        width: 2.5rem;
        height: 20px;
    }
`;
const Line = styled.span`
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
    margin-bottom: 7px;
    @media screen and (max-width: 425px){
        margin-bottom: 5px;
    }
`;
const DropDown = styled.div`
    background-color: #ffff;
    width: 100%;
    height: 200px;
    position: absolute;
    top: 70px;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    transform: ${props=> props.active === true ? 'translateX(0)' : 'translateX(-150vw)'};
    transition: all 1s ease;
    opacity: 0;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 300px;
        padding: 0;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        opacity: 1;
    }
    @media screen and (max-width: 425px){
        top: 50px;
    }
`;
const DropItem = styled.span`
    color: purple;
    font-size: 2rem;
    text-decoration: none;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
        color: #DC9F40;
    }
`;
const Cross = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;
const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleClick = ()=>{
        setActive(!active)
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
                    <Logo>Personal</Logo>
                </Link>
                </Left>
                <Right>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
                        <RightItem>
                            Home
                        </RightItem>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500}>
                        <RightItem>
                            About Us
                        </RightItem>
                    </Link>
                    <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500}>
                        <RightItem>
                            Testimonials
                        </RightItem>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <RightItem contact >
                            Contact Us
                        </RightItem>
                    </Link>
                </Right>
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
                <DropDown active={active}>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} style={{marginBottom: 20}} onSetActive={()=>setActive(false)}>
                        <DropItem>
                            Home
                        </DropItem>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500} style={{marginBottom: 20}} onSetActive={()=>setActive(false)}>
                        <DropItem>
                            About Us
                        </DropItem>
                    </Link>
                    <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500} style={{marginBottom: 20}} onSetActive={()=>setActive(false)}>
                        <DropItem>
                            Testimonials
                        </DropItem>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} style={{marginBottom: 20}} onSetActive={()=>setActive(false)}>
                        <DropItem contact>
                            Contact Us
                        </DropItem>
                    </Link>
                </DropDown>
            </Wrapper>
        </Container>
    )
}

export default Navbar
