import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #0e0d0d;
    overflow: none;
    position: relative;
    top: 60px;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    @media screen and (max-width: 425px){
        height: fit-content;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
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
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 580px){
        flex-direction: column;
    }
`;
const Title = styled.h1`
    font-family: 'Lora', sans-serif;
    font-weight: bold;
    font-size: 10rem;
    @media  screen and (max-width: 768px){
        font-size: 5rem;
    }
    @media screen and (max-width: 600px){
        font-size: 3rem;
    }
    @media screen and (max-width: 425px){
        margin: 20px 0;
    }
    
`;
const JobDone = styled.div`
    display: flex;
    flex-direction: column;
    width: min(100%, 230px);
    height: 65px;
    border-radius: 5px;
    border-bottom: 14px solid white;
    border-left: 6px solid white;
    border-right: 6px solid white;
    border-top: none;
    margin-top: 160px;
    margin-right: 50px;
    position: relative;
    @media (max-width: 768px){
       margin-top: 50px;
    }
    @media screen and (max-width: 425px){
        margin: 50px auto;
    }
`;
const Total = styled.span`
    position: absolute;
    font-size: 1.6rem;
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
        left: 10px;
    }
`;
const SubDesc = styled.span`
    font-size: 1.6rem;
    margin-top: 30px;
    text-align: center;
    @media (max-width: 320px){
        font-size: 1.3rem;
        margin-top: 5px;
    }
`;
const Bottom = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    margin-top: 20px;
    @media screen and (max-width: 580px){
        flex-direction: column;
        margin: 20px auto;
    }
`;
const Awards = styled.div`
    flex: 1;
    position: relative;

    // &::before{
    //     content: "";
    //     display: block;
    //     background-color: white;
    //     width: min(100%, 200px);
    //     height: 1px;
    //     position: absolute;
    //     top: -50px;
    //     margin-right: 50px;
    //     @media (max-width: 320px){
    //     display: none;
    // }
    // }


`;
const AwardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: min(100%,200px);
    height: 65px;
    border-radius: 5px;
    border-bottom: 14px solid white;
    border-left: 6px solid white;
    border-right: 6px solid white;
    border-top: none;
    margin-top: 70px;
    @media screen and (max-width: 580px){
        width: 75%;
    }
    @media screen and (max-width: 425px){
        margin: 50px auto;
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
    font-size: 1.8rem;
    border: 4px solid white;
    @media screen and (max-width: 320px){
       left: 30px;
    }
`;
const SubDescAward = styled.span`
    font-size: 1.6rem; 
    margin-top: 30px;
    text-align: center;
`;
const Desc = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;

`;
const DescItem1 = styled.div`
    margin-top: 15px;
    margin-left: 130px;
    font-size: 1.6rem;
    @media (max-width: 768px){
        width: 320px;
        margin-left: 0;
    }
    @media screen and (max-width: 600px){
        font-size: 1.4rem;
    }
    @media screen and (max-width: 425px){
        text-align: center;
    }
    @media screen and (max-width: 356px){
        width: 80%;
        margin: 0 auto;
    }
`;
const DescItem2 = styled.div`
    margin-top: 15px;
    margin-left: 130px;
    font-size: 1.6rem;
    @media (max-width: 768px){
        width: 320px;
        margin-left: 0;
    }
    @media screen and (max-width: 600px){
        font-size: 1.4rem;
    }
    @media screen and (max-width: 425px){
        text-align: center;
    }
    @media screen and (max-width: 356px){
        width: 80%;
        margin: 0 auto;
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
