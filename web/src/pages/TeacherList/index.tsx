import React, { useState, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Form, Main, Search }  from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent){
    e.preventDefault();
    
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <Container>
      <PageHeader 
        title="Estes são os proffys disponíveis."
      >
        <Form onSubmit={searchTeachers}>
          <Select 
            label="Matéria" 
            name="subject"
            value={subject}
            onChange={e=> { setSubject(e.target.value )}}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Quimíca', label: 'Quimíca'},
              {value: 'Física', label: 'Física'},
              {value: 'História', label: 'História'},
              {value: 'Português', label: 'Português'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'Filosofia', label: 'Filosofia'}
            ]}
          />
          <Select 
            label="Matéria" 
            name="subject"
            value={week_day}
            onChange={e=> { setWeekDay(e.target.value )}}
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sábado'}
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Horário"
            value={time}
            onChange={e=> { setTime(e.target.value ) }}
          />

          <Search type="submit">
            <FaSearch/>
          </Search>
        </Form>

      </PageHeader>

      <Main>
        {
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher}/>
          })
        }
      </Main>
    </Container>
  )
}

export default TeacherList;