import styled from "styled-components"
import Card from '../components/Card'
import { data } from '../dummyData'
const Container = styled.div`
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 60px;
    @media (max-width: 768px){
        padding-top: 50px;
        box-sizing:  border-box;
        height: fit-content;        
    }
`;
const Wrapper = styled.div`
    margin: 20px 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 60px;
    @media (max-width: 638px){
        margin: 5px 10px;
    }
`;
const Design = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 0;
    background-color: #0a0a5c;
    clip-path: polygon(38% 78%, 76% 63%, 100% 56%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 99%);
    z-index: -1;
    
    @media (max-width: 320px){
        display: none;
    }
`;
const Testimonials = () => {
    return (
        <Container id="testimonials">
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
