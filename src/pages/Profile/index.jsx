import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import LoadingMessage from '../../components/Loading';
import defaultProfile from '../../assets/images/default_profile.jpg';
import * as C from './styles';

class Profile extends React.Component {
  state = {
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const { name, email, image, description } = await getUser();
    this.setState({ name, email, image, description, loading: false });
  }

  render() {
    const { name, email, image, description, loading } = this.state;
    return (
      <C.Container>
        {loading ? <LoadingMessage /> : (
          <C.Details data-testid="page-profile">
            <C.Title>Seu perfil</C.Title>
            <C.ProfileImg
              data-testid="profile-image"
              src={ image || defaultProfile }
              alt="foto do usuário"
            />
            <C.Field>
              <h4>Nome</h4>
              <h5>{name}</h5>
            </C.Field>
            <C.Field>
              <h4>Email</h4>
              <h5>{email}</h5>
            </C.Field>
            <C.Field>
              <h4>Descrição</h4>
              <h5>{description}</h5>
            </C.Field>
            <Link to="/profile/edit">
              <C.Button>
                Editar perfil
              </C.Button>
            </Link>
          </C.Details>
        )}
      </C.Container>
    );
  }
}

export default Profile;
