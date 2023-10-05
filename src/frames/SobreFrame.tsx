/* eslint-disable jsx-a11y/anchor-is-valid */
import Paragraph from 'components/Paragraph';
import Link from 'components/Link';
import Frame from './Frame';

export default function SobreFrame() {
  return (
    <Frame>
      <h1>Sobre</h1>
      <Paragraph content="Autor: Tiago Enriquez Tachy" />
      <Paragraph content="Ano: 2023" />
      <Paragraph
        content={
          <Link
            address="https://github.com/tiagoenriquez/olhinho-2"
            text="Repositório"
          />
        }
      />
      <Paragraph
        content={
          <Link
            address="https://github.com/tiagoenriquez/olhinho-2/releases/tag/olhinho-2"
            text="Versões para desktop"
          />
        }
      />
      <Paragraph
        content={
          <Link
            address="https://olhinho.netlify.app/"
            text="Endereço da versão online"
          />
        }
      />
      <Paragraph
        content={
          <Link
            address="https://github.com/tiagoenriquez/olhinho-2/blob/main/README.md"
            text="Conheça mais sobre o projeto"
          />
        }
      />
      <Paragraph
        content={
          <Link
            address="https://github.com/electron-react-boilerplate/electron-react-boilerplate"
            text="Principal ferramenta utilizada neste projeto"
          />
        }
      />
    </Frame>
  );
}
