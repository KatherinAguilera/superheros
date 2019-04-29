import React from 'react';
import './home-layout.css';
import LayoutHeros from '../../heros/components/layoutheros'
import { Link } from 'react-router-dom';

function HomeLayout(props) {
  return (
    <section className="HomeLayout" id="Home">
  
      {props.children}
          {/* <LayoutHeros heros={this.props.data.heros}/> */}
    </section>
  )
}

export default HomeLayout