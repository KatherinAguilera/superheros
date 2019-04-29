import React from 'react';
import './layoutheros.css';
import Heros from './heros';
import IconHome from './../../iconos/components/home-icon';

function LayoutHeros (props) {
  {props.children}

  return (
    <div id="" className="Super">
      <div className="Home-title">
        <h2 className="h2-hero">Super<span>heros</span></h2>
        <IconHome />
      </div>
      <div className="Heros">
      {
          props.heros.map((item) =>{
            return <Heros key={item.id} {...item} />
          })
        }
      <div className="HomeFooter">
      <IconHome />
      </div>
      </div>
    </div>
  )
}
export default LayoutHeros