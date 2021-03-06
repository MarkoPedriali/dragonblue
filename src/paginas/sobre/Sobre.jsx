import { Titulo } from '../../componentes/titulo/styledT';
import { Paragrafo } from '../../componentes/paragrafo/styledP';
import * as S from './styledSo';
import perfil from './perfil.jpeg';

export default function Sobre() {
  return (
    <>
      <Titulo>Sobre</Titulo>
      <S.Texto>
      <Paragrafo>
        Esse projeto tem como objetivo implementar uma aplicação web Front-end com integração ao 
        banco de dados, requisitando ao banco métodos POST, GET, DELETE e PUT, passando por todas
        as fases do CRUD. 
      </Paragrafo>

      <Paragrafo>
        Meu nome é Marko Denis, tenho formação técnica em Redes de Computadores e, atualmente, 
        estudante de Web Development com especialização em Front-End. 
        
      </Paragrafo>
      </S.Texto>
      <S.ImgCard>
        <S.Img src={perfil}></S.Img>
      </S.ImgCard>

      <S.SocialBlock>
        <a
          href="https://github.com/MarkoPedriali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marko-pedriali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/kinawibe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-instagram"></i>
        </a>
        <a
          href="mailto:marko.pedriali@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-mail"></i>
        </a>
      </S.SocialBlock>
      
    </>
  );
}