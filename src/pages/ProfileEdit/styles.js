import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 10px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 60px;
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 60px;
  align-self: center;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 10px 0px;

  h4 {
    width: 70px;
    margin-right: 50px;
    white-space: nowrap;
  }

  input {
    background-color: ${({ theme: { colors } }) => colors.main};
    border: 2px solid ${({ theme: { colors } }) => colors.primary.default};
    outline: none;
    height: 35px;
    width: 350px;
    padding: 20px 30px;
    margin: 0px 20px;
    border-radius: 10px;

    &::placeholder{
    color: ${({ theme: { colors } }) => colors.text.placeholder};
  }
  }

  textarea {
    background-color: ${({ theme: { colors } }) => colors.main};
    border: 2px solid ${({ theme: { colors } }) => colors.primary.default};
    outline: none;
    height: 70px;
    width: 350px;
    padding: 20px 30px;  
    margin: 0px 20px;
    border-radius: 10px;

  &::placeholder{
    color: ${({ theme: { colors } }) => colors.text.placeholder};
  }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  color: ${({ theme: { colors } }) => colors.text.lighter};
  border: none;
  margin: 10px 0px 0px -35px;
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
