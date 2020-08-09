import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageLanding = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const Container = styled.section`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total"
    ;
  }
`;

export const LogoContainer = styled.section`
  text-align: center;
  margin-bottom: 3.2rem;

  img{
    height: 10rem;

    @media (min-width: 1100px) {
      height: 100%;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media (min-width: 1100px) {
      font-size: 3.6rem;
      text-align: initial;
    }
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const Button = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2.0rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-primary-lighter);
  color: var(--color-button-text);

  transition: background-color 0.2s;

  img {
    width: 4rem;
    margin-right: 2.4rem;
  }
  &:hover{
    cursor: pointer;
    background: var(--color-primary-light);
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`;

export const ButtonSecondary = styled(Button)`
  background: var(--color-secundary);
  margin-left: 1.6rem;

  &:hover{
    background: var(--color-secundary-dark);
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;