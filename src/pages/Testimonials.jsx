import styled from "styled-components"
import Card from '../components/Card'
import { data } from '../dummyData'
const Container = styled.div`
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;
const Wrapper = styled.div`
    margin: 20px 40px;
    display: flex;
    justify-content: space-between;
`;
const Design = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 0;
    background-color: #0a0a5c;
    clip-path: polygon(38% 78%, 76% 63%, 100% 56%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 99%);
`;
const Testimonials = () => {
    return (
        <Container>
            <Wrapper>
                {data.map((info)=>
                    <Card key={info.id} info={info}/>
                )}
            </Wrapper>
            <Design></Design>
        </Container>
    )
}

export default Testimonials
