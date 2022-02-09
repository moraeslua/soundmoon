import React from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import LoadingMessage from '../components/LoadingMessage';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  state = {
    loading: false,
    userInfo: {},
    isSaveButtonDisabled: true,
    redirect: false,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const userInfo = await getUser();
    this.setState({ userInfo, loading: false }, () => {
      this.validadeInputs(userInfo);
    });
  }

  validateTextInputs = (inputValue) => inputValue.length > 0

  validateEmail = (email) => {
    // Regex from https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validadeInputs = (userInfo) => {
    const boolArray = [
      this.validateTextInputs(userInfo.name),
      this.validateEmail(userInfo.email),
      this.validateTextInputs(userInfo.description),
      this.validateTextInputs(userInfo.image),
    ];
    this.setState({ isSaveButtonDisabled: !boolArray.every((bool) => bool) });
    // or :
    // if (boolArray.every((bool) => bool)) {
    //   this.setState({ isSaveButtonDisabled: false });
    // } else {
    //   this.setState({ isSaveButtonDisabled: true });
    // }
  }

  handleOnChange = ({ target: { id, value } }) => {
    const { userInfo } = this.state;
    // spread precisa ser feito antes, pra '[id]: value' sobrescrever o que a gente precisa dentro do estado.
    const newUserInfo = { ...userInfo, [id]: value };
    this.setState({ userInfo: newUserInfo }, () => {
      this.validadeInputs(newUserInfo);
    });
  }

  handleSaveButton = async () => {
    this.setState({ loading: true });
    const { userInfo } = this.state;
    await updateUser(userInfo);
    this.setState({ loading: false, redirect: true });
  }

  render() {
    const {
      userInfo:
    {
      name,
      email,
      image,
      description,
    },
      loading,
      isSaveButtonDisabled,
      redirect,
    } = this.state;
    return (
      <main data-testid="page-profile-edit">
        <Header />
        {redirect && <Redirect to="/profile" />}
        {loading ? <LoadingMessage /> : (
          <form>
            <h3>Nome</h3>
            <input
              id="name"
              data-testid="edit-input-name"
              type="text"
              value={ name }
              onChange={ this.handleOnChange }
            />
            <h3>Email</h3>
            <input
              id="email"
              data-testid="edit-input-email"
              type="text"
              value={ email }
              onChange={ this.handleOnChange }
            />
            <h3>Descrição</h3>
            <textarea
              id="description"
              data-testid="edit-input-description"
              value={ description }
              onChange={ this.handleOnChange }
            />
            <h3>Foto de perfil</h3>
            <input
              id="image"
              data-testid="edit-input-image"
              type="text"
              value={ image }
              alt="foto de perfil do usuário"
              onChange={ this.handleOnChange }
            />
            <button
              data-testid="edit-button-save"
              type="button"
              disabled={ isSaveButtonDisabled }
              onClick={ this.handleSaveButton }
            >
              Salvar Alterações
            </button>
          </form>
        )}
      </main>
    );
  }
}

export default ProfileEdit;
