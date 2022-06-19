import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';

export const Card = styled.div`
  background-color: ${({ theme: { colors } }) => colors.card.default};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin: 20px 0px;
  padding: 15px;
  width: ${(props) => props.cardWidth};
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme: { colors } }) => colors.card.hover};
  }

  &:hover .outline-heart {
    visibility: visible;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & {
      text-decoration: none;
      text-decoration-color: none;
    }
`;

export const Play = styled(FaPlay)`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:active {
    transform: scale(1.2);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const Pause = styled(FaPause)`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p, input {
    margin: 0px 7px;
  }
`;

export const MusicDataContainer = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  
  img {
    width: 50px;
    height: 50px;
  }
  
  div {
    margin: 0px 10px;
    
    h5 {
      font-size: 12px;
      cursor: pointer;
    }

    h4 {
      font-size: 15px;
      cursor: pointer;
      text-decoration: none;
    }
    
    h5:hover, h4:hover {
      text-decoration: underline;
    }

  }
  
  & a {
    color: #000;
    text-decoration: none;
    text-decoration-color: none;
  }
`;

export const FavoriteLabel = styled.label`
  display: flex;
  
  input {
    display: none;
  }
`;

export const FillHeart = styled(FaHeart)`
  color: ${({ theme: { colors } }) => colors.primary.default};
  width: 17px;
  height: 17px;
`;

export const OutlineHeart = styled(FiHeart)`
  visibility: hidden;
  color: ${({ theme: { colors } }) => colors.primary.default};
  width: 17px;
  height: 17px;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary.dark}
  }
`;

export const DetailsContainer = styled.div`
  width: ${(props) => props.detailsWidth};
  overflow: hidden;
  
  h4 {
    white-space: nowrap;
  }
  
  & a {
    color: #000;
    text-decoration: none;
    text-decoration-color: none;
  }
`;
