import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { PageLanding, Container, LogoContainer, HeroImage, ButtonsContainer, Button, ButtonSecondary, TotalConnections } from './styles';
import api from '../../services/api';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);
  
  return (
    <PageLanding>
      <Container>
        <LogoContainer>
          <img src={logoImg} alt="Proffy"/>
        </LogoContainer>

        <HeroImage src={landingImg} />

        <ButtonsContainer>
          <Button to="/study" >
            <img src={studyIcon} alt="estudar"/>
            Estudar
          </Button>

          <ButtonSecondary to="/give-classes" >
            <img src={giveClassesIcon} alt="dar aulas"/>
            Dar Aulas
          </ButtonSecondary>
        </ButtonsContainer>

        <TotalConnections>
          Total de { totalConnections } conexões já realizadas

          <img src={purpleHeartIcon} alt=""/>
        </TotalConnections>
      </Container>
    </PageLanding>
  )
}

export default Landing;