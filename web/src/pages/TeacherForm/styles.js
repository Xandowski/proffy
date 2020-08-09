import styled from 'styled-components';
//page-teacher-form
export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;
  }
`;

//main
export const Main = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  fieldset + fieldset {
    margin-top: 6.4rem;
  }
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  legend{
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }

  span{
    margin-right: 1.2rem;
  }

  button {
    border: 0;
    background: none;
    color: var(--color-primary);
    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`;

export const Div = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    img{
      margin-right: 2rem;
    }
  }

  @media (min-width: 700px) {
    padding: 4.0rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.6rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 3.2rem;
  transition: background-color 0.2s;

  &hover{
    background: var(--color-secundary-dar);
  }

  @media (min-width: 700px) {
    width: 20rem;
    margin-top: 0;
  }
`;