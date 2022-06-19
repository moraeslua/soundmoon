import React from 'react';
import spinner from '../../assets/images/spinner.svg';
import * as C from './styles';

class LoadingMessage extends React.Component {
  render() {
    return (
      <C.Container>
        <C.SpinnerContainer>
          <C.Spinner src={ spinner } alt="carregando" />
        </C.SpinnerContainer>
      </C.Container>
    );
  }
}

export default LoadingMessage;
