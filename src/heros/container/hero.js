import React from 'react';
import Heros from '../components/heros';
import IconHome from '../../iconos/components/home-icon';
import '../../data.json';
import '../components/layoutheros.css';
function Hero (props) {
    const hero = props.hero;

    return (
      <div>
        <div className="Home-title">
        <h2 className="h2-hero">Super<span>hero</span></h2>
        <IconHome />
        </div>
        <Heros className="Hero-id"
            // name={hero.name}
            // picture={hero.picture}
            // publisher={hero.publisher}
            // info={hero.info}
          />
      </div>
    )
  }

export default Hero;
