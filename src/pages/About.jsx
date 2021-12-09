import styled from "styled-components"

const Container = styled.div`
    height: calc(100vh - 60px);
    background-color: #0e0d0d;
    overflow: none;
    position: relative;
    top: 60px;
    @media (max-width: 320px){
        width: 320px;
        top: 30px;
        height: calc(100vh - 200px);
    }
`;
const Wrapper = styled.div`
    height: 100%;
    margin: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    @media (max-width: 320px){
        margin: 0;
        padding: 0;
    }

`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 320px){
        flex-direction: column;
    }
`;
const Title = styled.h1`
    font-family: 'Lora', sans-serif;
    font-weight: bold;
    font-size: 100px;
    @media (max-width: 320px){
        display: none;
    }
`;
const JobDone = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 65px;
    border-radius: 5px;
    border-bottom: 14px solid white;
    border-left: 6px solid white;
    border-right: 6px solid white;
    border-top: none;
    margin-top: 160px;
    margin-right: 50px;
    position: relative;
    @media (max-width: 320px){
        width: 150px;
        height: 30px;
        margin-top: 60px;
        margin-left: 25px;
    }
`;
const Total = styled.span`
    position: absolute;
    top: -60px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    border-radius: 50%;
    border: 4px solid white;
    @media (max-width: 320px){
        top: -65px;
        margin-left: 50px;
    }
`;
const SubDesc = styled.span`
    margin-top: 30px;
    text-align: center;
    @media (max-width: 320px){
        font-size: 13px;
        margin-top: 5px;
    }
`;
const Bottom = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 320px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const Awards = styled.div`
    flex: 1;
    position: relative;
    @media (max-width: 320px){
        display: none;
    }

    &::before{
        content: "";
        display: block;
        background-color: white;
        width: 200px;
        height: 1px;
        position: absolute;
        top: -50px;
        margin-right: 50px;
        @media (max-width: 320px){
        display: none;
    }
    }


`;
const AwardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 65px;
    border-radius: 5px;
    border-bottom: 14px solid white;
    border-left: 6px solid white;
    border-right: 6px solid white;
    border-top: none;
    margin-top: 70px;
    @media (max-width: 320px){
        display: none;
    }
`;

const TotalAwards = styled.div`
    position: absolute;
    top: 15px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    border-radius: 50%;
    border: 4px solid white;
    @media (max-width: 320px){
        display: none;
    }
`;
const SubDescAward = styled.span`
    margin-top: 30px;
    text-align: center;
    @media (max-width: 320px){
        display: none;
    }
`;
const Desc = styled.div`
    flex: 1;

    &::before{
        content: "";
        display: block;
        background-color: white;
        width: 650px;
        height: 1px;
        position: absolute;
        top: -50px;
        margin-right: 50px;
        @media (max-width: 320px){
        display: none;
    }
    }

    &::after{
        content: "";
        display: block;
        background-color: white;
        width: 650px;
        height: 1px;
        position: absolute;
        bottom: -30px;
        margin-right: 50px;
        @media (max-width: 320px){
        display: none;
    }
    }
`;
const DescItem1 = styled.div`
    width: 70%;
    margin-top: 15px;
    margin-left: 130px;
    @media (max-width: 320px){
        width: 320px;
        margin-left: 0;
        margin-top: 0;
        font-size: 13px;
        margin-bottom: 20px;
        text-align: center;
    }
`;
const DescItem2 = styled.div`
    width: 70%;
    margin-top: 15px;
    margin-left: 130px;
    @media (max-width: 320px){
        width: 320px;
        margin-left: 0;
        margin-top: 0;
        font-size: 13px;
        text-align: center;
    }

`;
const About = () => {
    return (
        <Container id="about">
            <Wrapper>
                <Top>
                    <Title>ABOUT US</Title>
                    <JobDone>
                        <Total>5.2K</Total>
                        <SubDesc>Jobs done successfully</SubDesc>
                    </JobDone>
                </Top>
                <Bottom>
                    <Awards>
                        <AwardsContainer>
                            <TotalAwards>5</TotalAwards>
                            <SubDescAward>Award winner</SubDescAward>
                        </AwardsContainer>
                    </Awards>
                    <Desc>
                    <DescItem1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non rem saepe minima dicta est mollitia. Possimus laboriosam similique, ducimus fugit, ut eos totam accusamus laudantium quisquam fugiat magni quibusdam!
                    </DescItem1>
                    <DescItem2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus maiores, repellendus natus fugiat corporis labore veritatis, rerum aut ipsam amet fugit corrupti magnam impedit debitis cum placeat minima. Modi, harum?    
                    </DescItem2>
                    </Desc>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default About
