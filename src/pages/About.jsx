import styled from "styled-components"

const Container = styled.div`
    height: calc(100vh - 60px);
    background-color: #0e0d0d;
    overflow: none;
`;
const Wrapper = styled.div`
    height: 100%;
    margin: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.h1`
    font-family: 'Lora', sans-serif;
    font-weight: bold;
    font-size: 100px;
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
`;
const SubDesc = styled.span`
    margin-top: 30px;
    text-align: center;
`;
const Bottom = styled.div`
    display: flex;
    position: relative;

`;
const Awards = styled.div`
    flex: 1;
    position: relative;

    &::before{
        content: "";
        display: block;
        background-color: white;
        width: 200px;
        height: 1px;
        position: absolute;
        top: -50px;
        margin-right: 50px;
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
`;
const SubDescAward = styled.span`
    margin-top: 30px;
    text-align: center;
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
    }
`;
const DescItem1 = styled.div`
    width: 70%;
    margin-top: 15px;
    margin-left: 130px;

`;
const DescItem2 = styled.div`
    width: 70%;
    margin-top: 15px;
    margin-left: 130px;

`;
const About = () => {
    return (
        <Container>
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
