import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/26205073?s=460&u=f08022b202c3dafac83c692d56935dbc816c7c2d&v=4"
            alt="Tácio Cabral"
          />
          <div>
            <strong>Tácio Cabral</strong>
            <span>Python</span>
          </div>
        </header>

        <p>
          Text de apresentação
          <br />
          <br />
          Mais texto...
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
  );
};

export default TeacherItem;
