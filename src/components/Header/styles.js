import styled from 'styled-components';
import { FaCloudMoon } from 'react-icons/fa';

export const Header = styled.header`
  background-image: url(${(props) => props.theme.images.header.bg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 5px 12px 32px 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 85px;
  display: flex;
`;

export const Opacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 20px 40px;
  `;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  & li {
      list-style: none;
      margin: 5px;
    }

  & a {
      color: #d9d4e7;
      text-decoration: none;
      text-decoration-color: none;
    }

  & a:hover {
    color: #fffffe;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primary.magenta};
  border-radius: 10px;
  padding: 18px;
  box-shadow: 5px 2px 5px rgb(0, 0, 0, 0.1);
  margin: 5px;
  
  & {
    color: ${({ theme: { colors } }) => colors.text.light};
    text-align: center;
    cursor: pointer;
  }

  &:hover, a:hover {
    color: ${({ theme: { colors } }) => colors.text.lighter};
  }

  a {
      color: ${({ theme: { colors } }) => colors.text.light};
      text-decoration: none;
      text-decoration-color: none;
    }
`;

export const UserPhoto = styled(FaCloudMoon)`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 5px;
  filter: drop-shadow(0px 0px 7px rgb(0, 0, 0, 0.2));
`;
