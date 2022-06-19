import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 170px);
  width: 80%;
  margin: 0 auto;
`;

export const SongsContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

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
`;

export const SongsList = styled.div`
  padding: 0px 20px;
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    margin-top: 7px;
  }
  h5 {
    margin-top: 4px;
  }

  img {
    width: 230px;
    height: 230px;
    box-shadow: 0px 5px 50px -8px rgba(0,0,0,0.25);
  }
  
`;

export const Content = styled.div`
  margin: 5px 0px;
  width: 450px;
`;
