import styled from 'styled-components'

const Container = styled.div`
    width: 250px;
    height: 250px;
    -webkit-box-shadow: 2px 5px 15px 2px #B8B8B8; 
    box-shadow: 2px 5px 15px 2px #B8B8B8;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 50px;

`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;
const Text = styled.span`
    font-family: 'Lora', sans-serif;
    font-weight: 400;
    margin-top: 30px;
`;
const Name = styled.span`
    font-family: 'Lora', sans-serif;
    font-weight: bold;
    margin-bottom: 5px;
`;
const JobTitle = styled.span` 
    font-family: 'Lora', sans-serif;
    font-weight: bold;
`;
const Card = ({ info }) => {
    return (
        <Container>
            <Wrapper>
                <Image src={info.image} alt=""/>
                <Name>{info.name}</Name>
                <JobTitle>{info.jobTitle}</JobTitle>
                <Text>{info.text}</Text>
            </Wrapper>
        </Container>
    )
}

export default Card
