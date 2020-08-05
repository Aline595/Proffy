import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Select from '../../components/select';
import Textarea from '../../components/Textarea';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm (){

  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItens, setScheduleItems]= useState([
    {week_day: 0, from: '', to: ''}
  ]);

  function setScheduleItemsValue(position: number, field:string, value:string){
    const updatedScheduleItems = scheduleItens.map((scheduleItem, index) =>{
      if(index === position){
        return { ...scheduleItem, [field]:value};
      }

      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }


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

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItens
    }).then(()=>{
      alert("Cadastrso realizado com sucesso!");

      history.push('/');
    }).catch(()=>{
      alert('Erro no cadastro!');
    })
  }

    return(
      <div id="page-teacher-form" className="container">
        <PageHeader 
          title="Que incrível que você quer dar aulas." 
          description="O primeiro passo é preencher esse fromulário de inscrição"
        />

      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>

          <Input 
            name="name" 
            label="Nome completo" 
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}
          />
          <Input 
            name="avatar" 
            label="Avatar"
            value={avatar} 
            onChange={(e)=>{setAvatar(e.target.value)}}
          />
          <Input 
            name="whatsapp" 
            label="WhatsApp"
            value={whatsapp} 
            onChange={(e)=>{setWhatsapp(e.target.value)}}
          />
          <Textarea 
            name="bio" 
            label="Biografia"
            value={bio} 
            onChange={(e)=>{setBio(e.target.value)}}
          />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={(e) =>{ setSubject(e.target.value)}}
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

          <Input name="cost" label="Custo da sua aula por hora"
            value={cost}
            onChange={(e) =>{ setCost(e.target.value)}}
          />
          
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button" onClick={addNewScheduleItem}>
            + Novo horário
            </button>
          </legend>
          
           {scheduleItens.map((scheduleItens, index) =>{
             return(
              <div key={scheduleItens.week_day} className="schedule-item">
              <Select
                    name="week_day" 
                    label="Dia da semana"
                    value={scheduleItens.week_day}
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value) }
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

              <Input 
                name="from" 
                label="Das" 
                type="time"
                value={scheduleItens.from}
                onChange={e => setScheduleItemsValue(index, 'from', e.target.value) }
              />
              <Input 
                name="to" 
                label="Até" 
                type="time"
                value={scheduleItens.to}
                onChange={e => setScheduleItemsValue(index, 'to', e.target.value) }
              />
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
          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
        </form>
      </main>

      </div>
    );
}

export default TeacherForm;