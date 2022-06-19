import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;

  div {
    width: 700px;
    color: ${({ theme: { colors } }) => colors.text.lighter};

    h2 {
      text-align: center;
      margin: 15px 0px;
    }

    p {
      text-align: justify;
    }
  }
`;

export const Astronaut = styled.img`
  width: 450px;
  height: 450px;
  filter: drop-shadow(0px 0px 7px rgb(0, 0, 0, 0.25));
`;
