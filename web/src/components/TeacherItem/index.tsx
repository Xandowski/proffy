import React from 'react';

import { ProfileHeader, ProfileFooter, ButtonFooter }  from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  id: number,
  avatar: string,
  bio: string,
  price: number,
  name: string,
  subject: string,
  whatsapp: string;
};

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return (
    <>
      <article>
          <ProfileHeader>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{
              teacher.subject}</span>
            </div>
          </ProfileHeader>

          <p>
            {teacher.bio}
          </p>

          <ProfileFooter>
            <p>
              Preço/hora
              <strong>R$ {teacher.price}</strong>
            </p>

            <ButtonFooter
              target="_blank"
              onClick={createNewConnection} 
              href={`https://wa.me/${teacher.whatsapp}`}>
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </ButtonFooter>
          </ProfileFooter>
        </article>
    </>
  );
};

export default TeacherItem;