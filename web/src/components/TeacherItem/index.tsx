import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/56769013?s=460&u=a4f3390f46e8180496d3a99749f3e70b7402ae9e&v=4" alt="avatar"/>
                <div>
                    <strong>Aline Soares</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores recnologias de química avançada.
                <br /> <br />
                Apaixonada por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiencias.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;