import styled from 'styled-components';
import { FaCloudMoon } from 'react-icons/fa';

export const Container = styled.div`
  background-image: url(${(props) => props.theme.images.login.bg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Opacity = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 79%;
  padding: 380px 0px 50px 0px;
`;

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
`;

export const Input = styled.input`
    background-color: ${({ theme: { colors } }) => colors.main};
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    padding: 10px 20px;
    margin: 6px 0;
    border-radius: 10px;

  &::placeholder{
    color: ${({ theme: { colors } }) => colors.text.placeholder};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  color: ${({ theme: { colors } }) => colors.text.lighter};
  border: none;
  margin: 5px 0;
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

export const Logo = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.text.lighter};
  font-size: 55px;
  letter-spacing: 0.5px;
  font-weight: bolder;
  transform: translate(-6px);
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.5));
`;

export const Mooncloud = styled(FaCloudMoon)`
  color: ${({ theme: { colors } }) => colors.text.lighter};
  width: 60px;
  height: 60px;
  align-self: center;
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.5));
`;
