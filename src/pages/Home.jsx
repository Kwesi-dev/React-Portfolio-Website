import styled from 'styled-components'
import mastercard from '../images/mastercard.png'
import paypal from '../images/paypal.png'
import skrill from '../images/skrill.png'
import visa from '../images/visa.png'
import imoji from '../images/imoji.jpg'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import twitter from '../images/twitter.png'
import man from '../images/man.png'

const Container = styled.div`
    display: flex;
    height: calc(100vh - 60px);
    padding: 0 80px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    top: 60px;
    @media (max-width: 768px){
        height: fit-content;
        flex-direction: column;
    }
    
`;
const Left = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    position: relative;

    @media (max-width: 768px){
        padding: 30px 0;
        box-sizing: border-box;
    }
`;
const Right = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;

    @media (max-width: 768px){
        padding: 40px 0;
        box-sizing: border-box;
    }
    @media screen and (max-width: 600px){
        margin-top: 80px;
    }
    &::before{
        content: "";
        display: block;
        width: min(100%, 250px);
        height: min(100%, 250px);
        clip-path: circle(48.5% at 51% 51%);
        background-color: #ceb998;
        position: absolute;
        bottom: 150px;
        right: 0px;
        z-index: -1;

        @media screen and (max-width: 500px){
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        @media screen and (max-width: 425px){
            display: none;
        }
    }
    &::after{
        content: "";
        display: block;
        width: min(100%, 250px);
        height: min(100%, 250px);
        clip-path: circle(48.5% at 51% 51%);
        background-color: #a3d4e9;
        position: absolute;
        top: 80px;
        right: 170px;
        z-index: -1;
        @media screen and (max-width: 500px){
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        @media screen and (max-width: 425px){
            display: none;
        }
    }

   
`;
const LeftTop = styled.div`
    margin-bottom: 30px;

`;
const Title = styled.h1`
    font-size: 6rem;
    margin-bottom: 20px;
    color: ${props=>props.brown && '#f8a31b'};
    font-family: 'Lora', sans-serif;
    @media screen and (max-width: 600px){
        font-size: 3rem;
    }
    @media screen and (max-width: 425px){
        text-align: center;
    }
`;
const Desc = styled.span`
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-family: 'Lora', sans-serif;
    @media screen and (max-width: 425px){
        display: block;
        text-align: center;
    }
`;
const LeftBottom = styled.div`
    display: flex;
`;
const HireMe = styled.span`
    width: 100px;
    text-align: center;
    background-color: #f8a31b;
    border-radius: 5px;
    padding: 7px 10px;
    color: white;
    font-size: 1.6rem;
    font-family: 'Lora', sans-serif;
    cursor: pointer;
    margin-right: 30px;
    @media (max-width: 500px){
        min-width: 80px; 
    }
    @media screen and (max-width: 425px){
        margin: 0 auto;
    }
`;
const Img = styled.img`
    max-width: 70px;
    height: 40px;
    object-fit: contain;
    margin-left: 10px;
    @media (max-width: 425px){
        display: none;
    }

`;
const Imoji = styled.img`
    max-width: 100px;
    height: 100px;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 400px;
    @media screen and (max-width: 600px){
        left: 300px;
    }
    @media screen and (max-width: 500px){
        width: 60px;
        height: 60px;
        top: 30px;
    }
    @media screen and (max-width: 425px){
        left: -10px;
    }
    @media screen and (max-width: 400px){
        left: -50px;
        top: 0;
    }
    
`;


const FacebookIcon = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 10px;
    object-fit: contain;
    background-color: white;
    position: absolute;
    top: 80px;
    right: 100px;
    @media (max-width: 768px){
        right: 300px;
        top: 20px;
    }
    @media screen and (max-width: 425px){
        right: -30px;
        top: 70px;
    }
    @media screen and (max-width: 320px){
        right: -40px;
    }
`;
const GoogleIcon = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 10px;
    object-fit: contain;
    background-color: white;
    position: absolute;
    top: 120px;
    left: 160px;
    @media screen and (max-width: 600px){
        left: 10px;
    }
    @media screen and (max-width: 320px){
        left: -40px;
    }
    
`;
const TwitterIcon = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 10px;
    object-fit: contain;
    background-color: white;
    position: absolute;
    bottom: 360px;
    right: 40px;
`;
const ManImage = styled.img`
    max-width: 450px;
    margin-left: 100px;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 600px){
        margin-left: 0;
    }
    @media screen and (max-width: 425px){
        margin-left: -100px;
    }
    @media screen and (max-width: 320px){
        margin-left: -150px;
    }
`;
const Home = () => {
    return (
        <Container id="home">
            <Left>
                <LeftTop>
                    <Title>Hy! I Am </Title>
                    <Title brown>Jacky Thomas</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, necessitatibus! Harum laborum quasi sed magnam!</Desc>
                    <Imoji src={imoji} alt=""/>
                </LeftTop>
                <LeftBottom>
                    <HireMe>Hire Me</HireMe>
                    <Img src={paypal} alt=""/>
                    <Img src={mastercard} alt=""/>
                    <Img src={skrill} alt=""/>
                    <Img src={visa} alt=""/>
                </LeftBottom>
            </Left>
            <Right>
                <FacebookIcon src={facebook} alt=""/>
                <GoogleIcon src={google} alt=""/>
                <TwitterIcon src={twitter} alt=""/>
                <ManImage src={man} alt=""/>
            </Right>
        </Container>
    )
}

export default Home
