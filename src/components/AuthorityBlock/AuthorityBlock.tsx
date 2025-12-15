import { Section, Container, Content, Title, Description, Divider } from './AuthorityBlock.styles';

export const AuthorityBlock: React.FC = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>Por que essa seleção?</Title>
          <Divider />
          <Description>
            Esses imóveis foram escolhidos com base no seu perfil, no potencial de valorização da
            região e na praticidade do dia a dia.
          </Description>
          <Description>
            Meu papel é filtrar o que realmente vale a pena, para que você não perca tempo
            analisando opções que não fazem sentido.
          </Description>
        </Content>
      </Container>
    </Section>
  );
};
