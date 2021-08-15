import styled, { createGlobalStyle } from 'styled-components'
import backgroundYoung from '../../assets/images/backgroundyoung.jpg'
import backgroundMature from '../../assets/images/backgroundmature.jpg'


export default createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif !important;
 }
    
`

export const Main = styled.main` 
height: 100vh;
overflow: hidden;
`

export const Header = styled.header`
display:flex;
justify-content: space-between;
padding: 10px 10px;
color: #f77f00;
height: 100%;
`
export const Title = styled.article`
color: #f77f00;
font-size: 5rem;
width:40%;
align-items: start;
font-weight: bold;
padding-top: 20px;

`
export const Slogan = styled.article`
color: #fff;
font-size: 1.2rem;
text-align: center;
align-self: flex-end;
padding-bottom: 20px;
`
export const Background = styled.div<{age: number}>`
background-image: url(${props =>  props.age < 50 ? backgroundYoung : backgroundMature});
height: 30vh;
background-size: cover;                      
background-repeat: no-repeat;
background-position: ${props => props.age <50 ? '50% 30%' : '50% 50%'};  
`

export const Section = styled.section`
height: 70vh;
padding: 2rem;
display: flex;
display: flex;
justify-content: center;
align-items: center;
background-color: #eae2b7;

`

export const Card = styled.div`
box-shadow: 0 0 20px 5px rgba(247,127,0,0.4);
background-color: #dfd290;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 50%;
width: 30%;
margin: 20px 40px;

`
export const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height:100%;


`
export const CardImage = styled.img`
width: 50%;
height: 30%;
align-self: center;
border-radius: 20px;
margin-top: 20px;
object-fit: fit;
`
export const CardTitle = styled.h2`
color: #d62828;
line-height: 1.4rem
margin-bottom: 0.5rem;
font-weight: bold;
padding: 10px 0;

`
export const CardText = styled.p`
color: #003049;
line-height: 1.2rem;
text-align: center;
padding: 5px 10px;
`
export const CardButton = styled.button`
color: #003049;
border: none;
border-bottom: 1px solid #f77f00;
background-color: transparent;
font-size: 1rem;
font-weight: bold;
padding-top: 1rem;
margin-top: 1rem;
margin: 10px 10px;
align-self: center;

&:hover {
    cursor: pointer;
}
`

export const Video = styled.video`
`


