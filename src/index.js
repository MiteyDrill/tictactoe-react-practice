import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import bookImage from './images/book.png';
import facebookLogo from './images/facebook.png';
import instagramLogo from './images/instagram.png';


class Product extends React.Component{
  imageDivStyle = {
    height: "100%"
  }

  imgStyle = {
    width: "100%",
    height: "80%"
  }

  productDivStyle = {
    backgroundColor: "rgba(0,0,0,0)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 2fr",
    gridRows: "1fr 1fr",
    width: "100%",
    height: "60px"
  }

  imgIconStyle={
    backgroundColor: "white",
    height: "70%",
    justifySelf: "center",
    alignSelf: "center",
    borderRadius: "100%",
  }

  buttonStyle={
    justifySelf: "center",
    alignSelf: "center",
    width: "50%",
    height: "70%",
    fontSize: "100%",
  }

  render(){
    return(
      <div style= {this.imageDivStyle}>
        <img style = {this.imgStyle} src = {bookImage}/>
        <div style={this.productDivStyle} >
          <img style={this.imgIconStyle} src={facebookLogo}/>
          <img style={this.imgIconStyle} src={instagramLogo}/>

          <button style={this.buttonStyle}>Buy</button>
        </div>
      </div>
    )
  }
}

class Body extends React.Component{

  render(){
    return(
      <main>
        <Product className="product-container"/>
        <Product className="product-container"/>
        <Product className="product-container"/>
        <Product className="product-container"/>
        <Product className="product-container"/>
        <Product className="product-container"/>
      </main>
    );
  }
}

//can I make this a pure component?
class Header extends React.Component{

  renderNav(){
    return(
      <ul id='nav-list'>
        <li key='1'>Home</li>
        <li key='2'>Products</li>
        <li key='3'>Cart</li>
      </ul>
    );
  }

  render(){
    return(
      this.renderNav()
    )
  };
}

class App extends React.Component{

  render(){
    return(
      <div>
        <Header className='header'></Header>
        <Body> </Body>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
