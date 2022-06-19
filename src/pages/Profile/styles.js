import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 15px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 50px 0px;
`;

export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 15px 0px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary.default};
  text-align: left;
  width: 400px;
  margin: 10px 0px;

  h4 {
    width: 60px;
    margin-right: 50px;
  }

  h5 {
    margin-left: 20px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  color: ${({ theme: { colors } }) => colors.text.lighter};
  border: none;
  margin: 10px 0;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 17px;
  font-weight: 600;
  height: 45px;
  letter-spacing: 0.5px;
  transition: ease-in-out 0.1s;

  &:hover{
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme: { colors } }) => colors.primary.dark};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.primary.darker};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled{
    background-color: ${({ theme: { colors } }) => colors.primary.desaturated};
    cursor: unset;
    box-shadow: none;
  }
`;
