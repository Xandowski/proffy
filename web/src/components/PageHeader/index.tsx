import React from 'react';
import { Header, TopBarContainer, Back, TitleContainer } from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description, children}) => {
  return (
    <Header>
      <TopBarContainer>
        <Back to="/">
          <img src={backIcon} alt="voltar"/>
        </Back>
        <img src={logoImg} alt="Proffy"/>
      </TopBarContainer>
      <TitleContainer desc={description}>
        <strong>{title}</strong>
        { description && <p>{description}</p> }
        {children}
      </TitleContainer>
    </Header>
  );
};

export default PageHeader;