import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.card.default};
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.15);
  width: 170px;
  height: 220px;
  
  & a {   
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    img {
      width: 130px;
      height: 120px;
    }
  }

  &:hover {
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme: { colors } }) => colors.card.hover};
  }
`;

export const Name = styled.p`
  font-weight: bold;
  white-space: nowrap;
  text-align: left;
  margin: 3px 0px;
`;

export const Info = styled.p``;

export const Content = styled.div`
  text-align: center;
  padding: 18px 15px;
  color: #0e172c
`;
