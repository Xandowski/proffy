import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  
  @media(min-width: 700px) {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  img {
    height: 1.6rem;
  }

  @media(min-width: 700px) {
    max-width: 1100px;
  }
`;

export const Back = styled(Link)`
  height: 3.2rem; 
  transition: opacity 0.2s;

  &:hover{
    opacity: 0.6;
  }
`;

export const TitleContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 3.2rem auto;

  margin-bottom: ${ props => props.desc && "6.4rem"};

  strong{
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);

    @media(min-width: 700px) {
      max-width: 350px;
    }
  }

  p{
    max-width: 34rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media(min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
