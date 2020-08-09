import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 1fr;

  label {
    color: var(--color-text-in-primary);
  }

  div + div {
    margin-top: 1.4rem;

    @media(min-width: 700px) {
      margin-top: 0;
      margin-left: 15px;
    }
  }

  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    position: absolute;
    bottom: -25px;
  } 
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  article{
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    & > p {
      padding: 0 2rem;
      font-size: 1.6rem;
      line-height: 2.8rem;

      @media(min-width: 700px) {
        padding: 0 3.2rem;
      }
    }
  }

  @media(min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;

export const Search = styled.button`
  background: 0;
  width: 3.2rem;
  height: 3.2rem;
  border: 0;
  align-self: center;
  justify-self: center;
  cursor: pointer;

  svg{
   color: #FFFFFF;
   width: 2.8rem;
   height: 2.8rem;
   transition: width, height 0.5s;

   &:hover{
     width: 3rem;
     height: 3rem
   }
  }
`;