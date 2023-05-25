import styled from 'styled-components';

const About = () => {
  return <AboutContainer>About</AboutContainer>;
};

const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-size: 80px;
  color: ${(props) => props.theme.colors.darkest};
  background-color: ${(props) => props.theme.colors.lightest};
`;

export default About;
