import React from 'react';

import './layoutheros.css';
import Count from '../container/count';
import { Link } from 'react-router-dom';

function Heros(props) {
  {props.children}

  return (
    <div className="Section">
        <div className="Hero">
        <Link
        to='/heros/:heroId'
        >
          <figure>
            <img src={props.picture}
              width="350"
              height="250"
            />
          </figure>
          </Link>
          <Count countLike={props.countLike}/>

            <p>
              <span>Name: </span>{props.name}
            </p>
            <p><span>Description: </span>{props.info} </p>
            <p><span>Editor: </span>{props.publisher} </p>
        </div>
    </div>
  )
}

export default Heros