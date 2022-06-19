import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.main};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 50px 10px;
`;

export const Feedback = styled.h3`
  color: #0e172c;
  margin: 15px 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  `;

export const SearchBar = styled.input`
    background-color: ${({ theme: { colors } }) => colors.main};
    border: 2px solid ${({ theme: { colors } }) => colors.primary.default};
    outline: none;
    height: 50px;
    width: 400px;
    padding: 10px 20px;
    margin: 0px 20px;
    border-radius: 10px;

  &::placeholder{
    color: ${({ theme: { colors } }) => colors.text.placeholder};
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  color: ${({ theme: { colors } }) => colors.text.lighter};
  border: none;
  margin: 10px 0;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 600;
  height: 45px;
  letter-spacing: 0.5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  transition: ease-in-out 0.1s;

  &:hover{
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme: { colors } }) => colors.primary.dark};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.primary.darker};
  }

  &:disabled{
    background-color: ${({ theme: { colors } }) => colors.primary.desaturated};
    cursor: unset;
    box-shadow: none;
  }
`;

export const UnorderedList = styled.ul`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.scrollbar.thumb};
    border-radius: 20px;
  }

  max-height: 500px;
  padding: 20px 10px;
  overflow-y: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  margin: 10px 0px;
  justify-content: center;
  
  & li {
    list-style: none;
    margin: 20px 30px;
  }

  & a {
      text-decoration: none;
      text-decoration-color: none;
    }
`;
