import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  margin-bottom: 1.6rem;

  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    margin-bottom: 2.4rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    font: 1.6rem Archivo;

    option{
      width: 50px;
    }
  }

  &:focus-within::after {
    content: '';
    width: calc(100% - 3.2rem);
    height: 2px;
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;

export default Div;