import React from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../../services/userAPI';
import LoadingMessage from '../../components/Loading';
import * as C from './styles';

class Login extends React.Component {
  state = {
    loading: false,
    userName: '',
    buttonIsDisabled: true,
    shouldRedirect: false,
  };

  handleOnChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.handleLoginButtonState());
  }

  handleLoginButtonState = () => {
    const MAX_VALUE = 3;
    const { userName } = this.state;
    this.setState({
      buttonIsDisabled: userName.length < MAX_VALUE,
    });
  }

  handleSubmitButton = async () => {
    const { userName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: userName });
    this.setState({ loading: false, shouldRedirect: true });
  }

  render() {
    const { userName, buttonIsDisabled, loading, shouldRedirect } = this.state;
    return (
      <C.Container>
        <C.Opacity>
          {loading ? <LoadingMessage /> : (
            <C.Main>
              <C.Logo>
                <C.Mooncloud />
                <C.Title>soundmoon</C.Title>
              </C.Logo>
              <C.Form data-testid="page-login">
                <C.Input
                  id="userName"
                  placeholder="Insira seu nome"
                  data-testid="login-name-input"
                  value={ userName }
                  onChange={ this.handleOnChange }
                />
                <C.Button
                  id="loginButton"
                  type="button"
                  data-testid="login-submit-button"
                  disabled={ buttonIsDisabled }
                  onClick={ this.handleSubmitButton }
                >
                  Entrar
                </C.Button>
              </C.Form>
            </C.Main>
          )}
          {shouldRedirect && <Redirect to="/search" />}
        </C.Opacity>
      </C.Container>
    );
  }
}

export default Login;
