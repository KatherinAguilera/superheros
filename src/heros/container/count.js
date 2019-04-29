import React from 'react';
import Like  from "../../../images/iconos/like.png";
import DisLike  from "../../../images/iconos/dislike.png";
import './count.css';

class Count extends React.Component {
  // Estado de Like dislike
  constructor(props) {
    super(props);
    this.state = {
      countLike: 0,
      countDislike:0
    };
    this.buttonLike = this.buttonLike.bind(this);
  }
  // Contador de Like
  buttonLike(event){
    this.setState({ countLike: this.state.countLike + 1 })
  }
  // componentWillMount(){
  //   localStorage.getItem('countLike') && this.setState({
  //     countLike:JSON.parse(localStorage.getItem('countLike'))
  //   })
  // }
  // componentDidMount(){
  //   if(!localStorage.getItem('countLike')){
  //     this.fetchData();
  //   }else{
  //     console.log('Using LocalStorage')
  //   }
  // }
  // Almacenamiento en LocalStorage
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('countLike',  JSON.stringify(nextState.countLike));
    localStorage.setItem('countLikeDate',  Date.now);
    localStorage.setItem('countDislike',  JSON.stringify(nextState.countDislike));

  }
  render() {
    return (
    <div className="Count">
        <div>
          <button  className="Like General" onClick={this.buttonLike}>
          <img src={Like}
              width="20"
              height="20"
            />
          </button>
          <span> Likes {this.state.countLike}</span>
        </div>
      <div>
        <button className="Dislike General" onClick={() => this.setState({ countDislike: this.state.countDislike + 1 })}>
        <img src={DisLike}
            width="20"
            height="20"
          />
        </button>
        <span> Dislikes {this.state.countDislike}</span>
      </div>
    </div>
    )
  }
}
export default Count;
