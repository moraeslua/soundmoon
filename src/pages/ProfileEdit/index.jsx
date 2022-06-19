import React from 'react';
import { Redirect } from 'react-router';
import LoadingMessage from '../../components/Loading';
import { getUser, updateUser } from '../../services/userAPI';
import defaultProfile from '../../assets/images/default_profile.jpg';
import * as C from './styles';

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
    ];
    this.setState({ isSaveButtonDisabled: !boolArray.every((bool) => bool) });
  }

  handleOnChange = ({ target: { id, value } }) => {
    const { userInfo } = this.state;
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.handleSaveButton();
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
      <C.Container data-testid="page-profile-edit">
        {redirect && <Redirect to="/profile" />}
        {loading ? <LoadingMessage /> : (
          <>
            <C.Title>Editar perfil</C.Title>
            <C.SubContainer>
              <C.ProfileImg
                data-testid="profile-image"
                src={ image || defaultProfile }
                alt="foto do usuário"
              />
              <C.Form onSubmit={ this.handleOnSubmit }>
                <C.Field>
                  <h4>Foto</h4>
                  <input
                    id="image"
                    data-testid="edit-input-image"
                    type="text"
                    value={ image }
                    onChange={ this.handleOnChange }
                  />
                </C.Field>
                <C.Field>
                  <h4>Nome</h4>
                  <input
                    id="name"
                    data-testid="edit-input-name"
                    type="text"
                    value={ name }
                    onChange={ this.handleOnChange }
                  />
                </C.Field>
                <C.Field>
                  <h4>Email</h4>
                  <input
                    id="email"
                    data-testid="edit-input-email"
                    type="text"
                    value={ email }
                    onChange={ this.handleOnChange }
                  />
                </C.Field>
                <C.Field>
                  <h4>Descrição</h4>
                  <textarea
                    id="description"
                    data-testid="edit-input-description"
                    value={ description }
                    onChange={ this.handleOnChange }
                  />
                </C.Field>
                <C.Button
                  data-testid="edit-button-save"
                  type="submit"
                  disabled={ isSaveButtonDisabled }
                  onClick={ this.handleSaveButton }
                >
                  Salvar Alterações
                </C.Button>
              </C.Form>
            </C.SubContainer>
          </>
        )}
      </C.Container>
    );
  }
}

export default ProfileEdit;
