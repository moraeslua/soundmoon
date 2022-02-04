import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { loginName, loginButtonIsDisabled, onChange, onClick } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            id="loginName"
            data-testid="login-name-input"
            value={ loginName }
            onChange={ onChange }
          />
          <button
            id="loginButton"
            type="button"
            data-testid="login-submit-button"
            disabled={ loginButtonIsDisabled }
            onClick={ onClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  loginName: PropTypes.string.isRequired,
  loginButtonIsDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Form;
