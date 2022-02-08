import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import LoadingMessage from '../components/LoadingMessage';

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
      <main>
        <Header />
        {loading ? <LoadingMessage /> : (
          <div data-testid="page-profile">
            <img data-testid="profile-image" src={ image } alt="foto do usuário" />
            <Link to="/profile/edit">Editar perfil</Link>
            <h3>Nome</h3>
            <p>{name}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Descrição</h3>
            <p>{description}</p>
          </div>
        )}
      </main>
    );
  }
}

export default Profile;
