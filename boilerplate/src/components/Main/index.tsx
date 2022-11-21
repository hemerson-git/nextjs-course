import { Wrapper, Title, Logo, Description, Illustration } from './styles';

export default function Main() {
  return (
    <Wrapper>
      <Logo
        src="img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />

      <Title>React Avançado</Title>
      <Description>Typescript, ReactJS, NextJS e Styled-components</Description>

      <Illustration
        src="img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para o código"
      />
    </Wrapper>
  );
}
