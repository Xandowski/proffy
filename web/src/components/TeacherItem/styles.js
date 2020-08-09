import styled from 'styled-components';

export const ProfileHeader = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  div{
    margin-left: 2.4rem;

    strong{
      font: 700 2.4rem Archivo;
      display: block;
      color: var(--color-text-title);
    }

    span{
      font-size: 1.6rem;
      display: block;
      margin-top: 0.4rem;
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  @media(min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const ProfileFooter = styled.footer`
  padding: 3.2rem 2rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    strong{
      display: block;
      color: var(--color-primary);
      font-size: 1.6rem;

      @media(min-width: 700px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }
  }

  @media(min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const ButtonFooter = styled.a`
  width: 20rem;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;

  &:hover {
    background: var(--color-secundary-dark);
  }

  @media(min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;
  }

  img{
    @media(min-width: 700px) {
      margin-right: 1.6rem;
    } 
  }
`;
