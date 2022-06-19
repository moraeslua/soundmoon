import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 110px 50px;
`;

export const SongsContainer = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 500px;
  overflow-y: scroll;

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
