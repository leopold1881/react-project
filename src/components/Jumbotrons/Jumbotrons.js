import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const Jumbotrons = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to my little ReactJS world!</h1>
        <p className="lead">Here you can find a simple react game, data query and search bar.</p>
        <hr className="my-2" />
        <p className="lead">
        <Link to='/RockPaperScissors'>
          <Button color="primary">Start</Button>
        </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbotrons;
