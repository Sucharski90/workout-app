import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.saveList(null)
  }

  render(){
    return (
      <div className="home">
        <h1 id="name">iLIFT</h1>
        <h3 id="title">Where would you like to start today?</h3>
        <div className='button'>
          <Link className='button2' to="/categories" style={{ textDecoration: 'none'}} onClick={() => this.props.getExerciseType("weight")}>Weights</Link>
          <Link className='button3' to="/categories" style={{ textDecoration: 'none' }} onClick={() => this.props.getExerciseType("calisthenics")}>Calisthenics</Link>
        </div>
      </div>
    );
  }
};

export default Home;
