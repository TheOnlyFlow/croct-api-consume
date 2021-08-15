/* eslint-disable no-restricted-globals */
import croct from '@croct/plug'
import { useState } from 'react';
import { useEffect } from 'react';


// Assets 
import healthImg from '../../assets/images/health.png'



// Font link

//styles 
import {
  Main,
  Section,
  Title,
  Slogan,
  Header,
  Background,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardButton,

} from './styles';


function App() {

  croct.plug({ appId: '00000000-0000-0000-0000-000000000000' })

  const [userAge, setUserAge] = useState<number>(0)
  const [hasAge, setHasAge] = useState<boolean>(false)

  useEffect(() => {
    if (hasAge == false) {
      const birthDate = prompt('Qual sua data de aniversário?', 'YYYY-MM-DD')
      setHasAge(true)
      croct.user.edit()
        .set('birthDate', birthDate)
        .save()
        .then(() => {
          setTimeout(() => {
            croct.evaluate(`user's age`)

            .then((age) => {
              console.log(age)
              setUserAge(age as number)
            })

          }, 1000);
        })
    }
  })

  if(userAge === 0){
    return null
  }


  return (
    <Main>

      <Background age={userAge} >
        <Header>
          <Title>
            Health Care
          </Title>
          <Slogan>
            Seu plano de saúde exclusivo e personalizado.
            <br />
            Porquê você merece o melhor!
          </Slogan>
        </Header>
      </Background>
      <Section>
        <Card>
          <CardImage src={healthImg} />
          <CardBody>
            <CardTitle>Plano Start</CardTitle>
            {userAge < 50 ? <CardText>Para você, jovem que gostaria de aproveitar a vida com as vantagens e benefícios disponíveis em nosso plano de saúde inicial. </CardText>
              :
              <CardText>Para você, mais experiente que gostaria de aproveitar a vida com as vantagens e benefícios disponíveis em nosso plano de saúde inicial. </CardText>

            }
            <CardButton>Aproveite!</CardButton>
          </CardBody>
        </Card>
        <Card>
          <CardImage src={healthImg} />
          <CardBody>
            <CardTitle>Plano Standard</CardTitle>
            {userAge < 50 ? <CardText>Para você, jovem que gostaria de aproveitar a vida com as  nossas vantagens e benefícios com mais conforto e segurança.</CardText>
              :
              <CardText>Para você, mais experiente que gostaria de aproveitar a vida com as  nossas vantagens e benefícios com mais conforto e segurança.</CardText>

            }
            <CardButton>Aproveite!</CardButton>
          </CardBody>
        </Card>
        <Card>
          <CardImage src={healthImg} />
          <CardBody>
            <CardTitle>Plano Premium</CardTitle>
            {userAge < 50 ? <CardText>Para você, jovem que gostaria de aproveitar a vida com as  nossas vantagens e benefícios com o nível máximo de conforto e segurança que oferecemos. </CardText>
              :
              <CardText>Para você, mais experiente que gostaria de aproveitar a vida com as  nossas vantagens e benefícios com o nível máximo de conforto e segurança que oferecemos. </CardText>
            }
            <CardButton>Aproveite!</CardButton>
          </CardBody>
        </Card>


      </Section>
    </Main>


  );
}

export default App;
