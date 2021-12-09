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
    padding: 0px 80px;
    height: calc(100vh - 60px);
    overflow: hidden;
    position: relative;
    top: 60px;
    @media (max-width: 320px){
        flex-direction: column;
        width: 320px;
        padding: 0 30px;
        top: 30px;
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
    @media (max-width: 320px){
        width: 320px;
    } 
`;
const Right = styled.div`
    flex: 1;
    position: relative;
    @media (max-width: 320px){
        width: 320px;
    }
   
`;
const LeftTop = styled.div`
    margin-bottom: 30px;

    @media (max-width: 320px){
        margin-bottom: 5px;
    }
`;
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    color: ${props=>props.brown && '#f8a31b'};
    font-family: 'Lora', sans-serif;
    @media (max-width: 320px){
       font-size: 30px;
       margin-bottom: 5px;
    }
`;
const Desc = styled.span`
    font-size: 16px;
    margin-bottom: 20px;
    font-family: 'Lora', sans-serif;
    @media (max-width: 320px){
        font-size: 14px;
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
    font-size: 16px;
    font-family: 'Lora', sans-serif;
    cursor: pointer;
    margin-right: 30px;
    @media (max-width: 320px){
        width: 100px;
        height: 15px;
        font-size: 12px;
    }
`;
const Img = styled.img`
    width: 70px;
    height: 40px;
    object-fit: contain;
    margin-left: 10px;
    @media (max-width: 320px){
        display: none;
    }

`;
const Imoji = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 400px;
    @media (max-width: 320px){
        display: none;
    }
`;
const Circle1 = styled.div`
    width: 250px;
    height: 250px;
    clip-path: circle(48.5% at 51% 51%);
    background-color: #a3d4e9;
    position: absolute;
    top: 70px;
    right: 130px;
    @media (max-width: 320px){
        display: none;
    }
`;
const Circle2 = styled.div`
    width: 250px;
    height: 250px;
    clip-path: circle(48.5% at 51% 51%);
    background-color: #ceb998;
    position: absolute;
    bottom: 170px;
    right: -30px;
    @media (max-width: 320px){
        display: none;
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
    right: 50px;
    @media (max-width: 320px){
        display: none;
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
    left: 210px;
    @media (max-width: 320px){
        display: none;
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
    bottom: 340px;
    right: -30px;
    @media (max-width: 320px){
        display: none;
    }
`;
const ManImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    bottom: 30px;
    left: 130px;
    @media (max-width: 320px){
        left: -30px;
        bottom: 60px;
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
                <Circle1></Circle1>
                <Circle2></Circle2>
                <FacebookIcon src={facebook} alt=""/>
                <GoogleIcon src={google} alt=""/>
                <TwitterIcon src={twitter} alt=""/>
                <ManImage src={man} alt=""/>
            </Right>
        </Container>
    )
}

export default Home
