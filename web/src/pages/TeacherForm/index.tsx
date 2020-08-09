import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Main, Fieldset, Footer, Button, Div } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState('');
  
  const [scheduleItems, setScheduleItems] = useState([
    {  week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
    
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value}
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      price: Number(price),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/')
    }).catch(() => {

    });
  }

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <Fieldset>
            <legend>Seus dados</legend>

            <Input 
              label="Nome completo" 
              name="name" 
              value={name} 
              onChange={(e) => { setName(e.target.value)}} 
            />

            <Input 
              label="Avatar" 
              name="avatar"
              value={avatar} 
              onChange={(e) => { setAvatar(e.target.value)}} 
            />

            <Input 
              label="Whatsapp" 
              name="whatsapp"
              value={whatsapp} 
              onChange={(e) => { setWhatsapp(e.target.value)}} 
          />

            <Textarea 
              name="bio" 
              label="Biografia"
              value={bio} 
              onChange={(e) => { setBio(e.target.value)}}  
            />
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              label="Matéria" 
              name="subject"
              value={subject} 
              onChange={(e) => { setSubject(e.target.value)}}
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
            <Input 
              label="Custo da hora por aula" 
              name="price"
              value={price} 
              onChange={(e) => { setPrice(e.target.value)}}
            />
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                <span>+</span> Novo horário
              </button>
            </legend>
            
            {
              scheduleItems.map((scheduleItem, index) => {
                return (
                  <Div key={scheduleItem.week_day}>
                    <Select 
                      label="Dia da semana" 
                      name="week_day"
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                      name="from" 
                      label="Das" 
                      type="time"
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                    />
                    <Input 
                      name="to" 
                      label="Até" 
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    />
                  </Div>
                )
              })
            }
            
          </Fieldset>
          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            
            <Button type="submit">
              Salvar cadastro
            </Button>
          </Footer>
        </form>
      </Main>
    </Container>
  )
}

export default TeacherForm;