import styled from 'styled-components';
import { FaPlay, FaPause, FaBackward } from 'react-icons/fa';

export const MusicDataContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
  }

  div {
    margin: 0px 15px;
    
    h5 {
      font-size: 12px;
      color: ${({ theme: { colors } }) => colors.text.light};
      cursor: pointer;
    }

    h4 {
      font-size: 15px;
      color: ${({ theme: { colors } }) => colors.text.lighter};
      cursor: pointer;
    }
    
    h5:hover, h4:hover {
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;
    text-decoration-color: none;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary.default};
  width: 100%;
  height: 85px;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  padding: 0px 480px;
  box-shadow: 5px -12px 32px 1px rgba(0,0,0,0.25);
`;

export const AudioPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  & p {
      color: ${({ theme: { colors } }) => colors.text.light};
      text-decoration: none;
      text-decoration-color: none;
    }

  & p:hover {
    color: ${({ theme: { colors } }) => colors.text.lighter};
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
      color: ${({ theme: { colors } }) => colors.text.light};
      text-decoration: none;
      text-decoration-color: none;
    }

  &:hover {
    color: ${({ theme: { colors } }) => colors.text.lighter};
  }
`;

export const ArrowLeft = styled(FaBackward)`
  width: 15px;
  height: 15px;
  margin: 0px 5px;
`;

export const ArrowRight = styled(FaBackward)`
  transform: scale(-1,1);
  width: 15px;
  height: 15px;
  margin: 0px 5px;
`;

export const Play = styled(FaPlay)`
  width: 15px;
  height: 15px;

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
  
  &:active {
    transform: scale(1.2);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;

  p {
    font-size: 15px;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProgressBar = styled.input`
  --bar-bg: ${({ theme: { colors } }) => colors.text.light};
  --seek-before-width: 0px;
  --seek-before-color: ${({ theme: { colors } }) => colors.text.lighter};
  --playhead: ${({ theme: { colors } }) => colors.tertiary.default};
  --selected-playhead: ${({ theme: { colors } }) => colors.tertiary.darj};
  --seek-before-height: 9px;
  
  appearance: none;
  background-color: var(--bar-bg);
  border-radius: 10px;
  position: relative;
  height: var(--seek-before-height);
  width: 300px;
  outline: none;
  margin: 10px 15px;

  /* {safari} */
  &::-webkit-slider-runnable-track {
    background-color: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: var(--seek-before-height);
    outline: none;
  }

  /* {firefox} */
  &::-moz-range-track {
    background-color: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: var(--seek-before-height);
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  /* {chrome and safari} */
  &:before {
    content: '';
    height: var(--seek-before-height);
    width: var(--seek-before-width);
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
  }

  /* {firefox} */
  &::-moz-range-progress {
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: var(--seek-before-height);
  }

  /* {playhead - chrome and safari} */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: var(--playhead);
    cursor: pointer;
    position: relative;
    margin: -3px 0px 0px 0px;
    z-index: 3;
    box-sizing: border-box;
  }

  /* {while dragging} */
  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background-color: var(--selected-playhead);
  }

  /* {playhead - firefox} */
  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: transparent;
    background-color: var(--playhead);
    cursor: pointer;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
  }

  /* {while dragging} */
  &:active::-moz-range-thumb {
    transform: scale(1.2);
    background-color: var(--selected-playhead); 
  } 
`;

export const Audio = styled.audio``;
