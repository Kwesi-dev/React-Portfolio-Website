import styled from "styled-components"
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CallIcon from '@mui/icons-material/Call'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import EmailIcon from '@mui/icons-material/Email'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
const Container = styled.div`
    height: calc(100vh - 60px);
    background-color: #0a0a5c;
    position: relative;
    top: 60px;
    @media (max-width: 320px){
        width: 320px;
        height: 100%;
        top: 30px;
    }
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 50px;
    box-sizing: border-box;
    @media (max-width: 320px){
        flex-direction: column;
        padding: 0;
    }
`;
const Left = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
`;
const Top = styled.div`  
    margin-bottom: 50px;
`;
const Title = styled.h1`
    color: white;
    font-family: 'Lora', sans-serif;
    margin-bottom: 20px;
`;
const Parag = styled.span`
    color: white;
    font-family: 'Lora', sans-serif;
    font-weight: 300;
    font-size: 16px;
`;
const Center = styled.div`
    margin-bottom: 20px;
`;
const Info = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const ContactIcon = styled.div`
    color: #2727c5;
`;
const ContactInfo = styled.span`
    color: white;
    font-family: 'Lora', sans-serif;
    font-size: 14px;
    margin-left: 10px;
`;
const MailIcon = styled.div`
    color: #2727c5;
`;
const Email = styled.span`
    color: white;
    font-family: 'Lora', sans-serif;
    font-size: 14px;
    margin-left: 10px;
`;
const LocationIcon = styled.div`
    color: #2727c5;
`;
const Location = styled.span`
    color: white;
    font-family: 'Lora', sans-serif;
    font-size: 14px;
    margin-left: 10px;
`;
const Bottom = styled.div`
    margin-top: 50px;
`;
const SocialMediaIcons = styled.div`
    display: flex;
`;
const SocialMediaIcon = styled.div`
    margin-right: 20px;
    cursor: pointer;
`;
const Facebook = styled.img`
    width: 25px;
    height: 25px;
`;
const Instagram = styled.img`
    width: 25px;
    height: 25px;
`;
const Twitter = styled.img`
    width: 25px;
    height: 25px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    @media (max-width: 320px){
        margin-bottom: 20px;
    }
`;
const Form = styled.div`
    width: 50%;
    height: 80%;
    background-color: white;
    margin-top: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    @media (max-width: 320px){
        width: 70%;
    }
`;
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
const Label = styled.label`
    margin-bottom: 5px;
    font-family: 'Lora', sans-serif;
`;
const InputContainer = styled.div`
    width: 100%;
    display: flex;
    border: 1.5px solid lightgray;
    border-radius: 5px;
    padding: 3px;
    box-sizing: border-box;
`;
const Input = styled.input`
    width: 90%;
    padding: 7px 10px;
    border: none;

    &:focus{
        outline: none;
    }
`;
const TextArea = styled.textarea`
    height: 120px;
    border: 1px solid lightgray;
    &:focus{
        outline: none;
        border: 1.5px solid #31b7ec;
    }
`;
const Button = styled.button`
    width: 50%;
    padding: 7px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 300;
    background-color: #31b7ec;
    margin-top: 10px;
    @media (max-width: 320px){
        width: 225px;
    }
`;
const Icon = styled.div`
    margin-right: 5px;
    border-right: 1px solid lightgray;
    padding-right: 2px;
`;

const Contact = () => {
    return (
        <Container id="contact">
            <Wrapper>
                <Left>
                    <Top>
                        <Title>Get a quote</Title>
                        <Parag>Fill out the form and our team will get back to you shortly</Parag>
                    </Top>
                    <Center>
                        <Info>
                            <ContactIcon>
                                <CallIcon/>
                            </ContactIcon>
                            <ContactInfo>+233 20 5636 7833</ContactInfo>
                        </Info>
                        <Info>
                            <MailIcon>
                                <EmailIcon/>
                            </MailIcon>
                            <Email>afriyiesamuel36@gmail.com</Email>
                        </Info>
                        <Info>
                            <LocationIcon>
                                <FmdGoodIcon/>          
                            </LocationIcon>
                            <Location>Opeikuma, Kasoa</Location>
                        </Info>
                    </Center>
                    <Bottom>
                        <SocialMediaIcons>
                            <SocialMediaIcon>
                                <Facebook src={facebook} alt=""/>
                            </SocialMediaIcon>
                            <SocialMediaIcon>
                                <Twitter src={twitter} alt=""/>
                            </SocialMediaIcon>
                            <SocialMediaIcon>
                                <Instagram src={instagram} alt=""/>
                            </SocialMediaIcon>
                        </SocialMediaIcons>
                    </Bottom>
                </Left>
                <Right>
                    <Form>
                        <FormItem>
                            <Label>Your Name</Label>
                            <InputContainer>
                                <Icon>
                                    <PersonOutlineIcon/>
                                </Icon>
                                <Input type="text"/>
                            </InputContainer>
                        </FormItem>
                        <FormItem>
                            <Label>Mail</Label>
                            <InputContainer>
                                <Icon>
                                    <MailOutlineIcon/>
                                </Icon>
                                <Input type="email"/>
                            </InputContainer>
                        </FormItem>
                        <FormItem>
                            <Label>Message</Label>
                            <TextArea/>
                        </FormItem>
                        <Button>send message</Button>
                    </Form>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Contact
