import React from 'react';
import astronaut from '../../assets/images/astronaut.png';
import * as C from './styles';

const Content = {
  title: 'This Page is Lost in Space',
  paragraph: `You thought this mission to the moon would be a quick six month thing.
  Your neighbor offered to look after your dog.
  Your high school math teacher was impressed.
  He once said you wouldn’t amount to anything. You sure showed him.
  But now here you are, fifty feet from your spaceship with no way to get back.
  Your dog will be so sad. Your math teacher will be so smug.
  Pretty devastating.`,
};

class NotFound extends React.Component {
  render() {
    return (
      <C.Container data-testid="page-not-found">
        <C.Astronaut src={ astronaut } alt="astronauta perdido no espaço" />
        <div>
          <h2>{Content.title}</h2>
          <p>{Content.paragraph}</p>
        </div>
      </C.Container>
    );
  }
}

export default NotFound;
