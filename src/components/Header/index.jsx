import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import spinner from '../../assets/images/spinner.svg';
import * as C from './styles';

class Header extends React.Component {
  state = {
    userName: '',
    loading: false,
  }

  componentDidMount() {
    this.setUserNameFromDataOnState();
  }

  setUserNameFromDataOnState = async () => {
    this.setState({ loading: true });
    const result = await getUser();
    this.setState({ userName: result.name, loading: false });
  };

  render() {
    const { userName, loading } = this.state;
    return (
      <C.Header data-testid="header-component">
        <C.Opacity>
          {loading ? <img src={ spinner } alt="spinner de carregamento" />
            : (
              <C.UserContainer>
                <C.UserPhoto />
                <Link data-testid="link-to-profile" to="/profile">
                  <p data-testid="header-user-name">
                    Olá,
                    {' '}
                    {userName}
                  </p>
                </Link>
              </C.UserContainer>
            )}
          <C.UnorderedList>
            <li><Link data-testid="link-to-search" to="/search"> Pesquisa | </Link></li>
            <li>
              <Link
                data-testid="link-to-favorites"
                to="/favorites"
              >
                Favoritos |
              </Link>
            </li>
            <li><Link data-testid="link-to-profile" to="/profile"> Perfil</Link></li>
          </C.UnorderedList>
        </C.Opacity>
      </C.Header>
    );
  }
}

export default Header;
