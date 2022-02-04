import React from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import LoadingMessage from '../components/LoadingMessage';
import FormLogin from '../components/FormLogin';

class Login extends React.Component {
  state = {
    loading: false,
    loginName: '',
    loginButtonIsDisabled: true,
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
    const { loginName } = this.state;
    this.setState({
      loginButtonIsDisabled: loginName.length < MAX_VALUE,
    });
  }

  handleSubmitButton = async () => {
    const { loginName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: loginName });
    this.setState({ loading: false, shouldRedirect: true });
  }

  render() {
    const { loginName, loginButtonIsDisabled, loading, shouldRedirect } = this.state;
    return (
      <div>
        {loading ? <LoadingMessage /> : <FormLogin
          loginName={ loginName }
          loginButtonIsDisabled={ loginButtonIsDisabled }
          onChange={ this.handleOnChange }
          onClick={ this.handleSubmitButton }
        />}
        {shouldRedirect && <Redirect to="/search" />}
      </div>
    );
  }
}

export default Login;
