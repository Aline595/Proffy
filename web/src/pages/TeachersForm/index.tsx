import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Select from '../../components/select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm (){
  const [scheduleItens, setScheduleItems]= useState([
    {week_day: 0, from: '8:00 AM', to: '4:00 PM'},
    {week_day: 2, from: '10:00 AM', to: '6:00 PM'}
  ]);


  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItens,
      {
        week_day: 3,
        from: '',
        to: ''
      }
    ]);
  }

    return(
      <div id="page-teacher-form" className="container">
        <PageHeader 
          title="Que incrível que você quer dar aulas." 
          description="O primeiro passo é preencher esse fromulário de inscrição"
        />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="WhatsApp"/>
          <Textarea name="bio" label="Biografia"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciências', label: 'Ciências'},
              {value: 'Educação física', label: 'Educação física'},
              {value: 'Física', label: 'Física'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'História'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Programação', label: 'Programação'},
              {value: 'Química', label: 'Química'},
              {value: 'Português', label: 'Português'},
            ]}
          />

          <Input name="cost" label="Custo da sua aula por hora"/>
          
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button" onClick={addNewScheduleItem}>
            + Novo horário
            </button>
          </legend>
          
           {scheduleItens.map(scheduleItens =>{
             return(
              <div key={scheduleItens.week_day} className="schedule-item">
              <Select
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                        {value: '1', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-ferira'},
                        {value: '6', label: 'Sabado'}
                    ]}
              />

              <Input name="from" label="Das" type="time"/>
              <Input name="to" label="Até" type="time"/>
            </div>

             );

           })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>

      </div>
    );
}

export default TeacherForm;