import React, { Component } from "react";

class Bitcoin extends Component {
  state = {
    bitcoinPrice: null
  }

  componentDidMount() {
    this.bitcoin();
  }

  bitcoin(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(result => result.json())
      .then(result => this.setState({bitcoinPrice: result.bpi.USD.rate_float}))
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div>
        {this.state.bitcoinPrice==null ? <div className="spinner-border text-primary h6" role="status" aria-hidden="true"></div> : ('BITCOIN PRICE: '+ this.state.bitcoinPrice + ' $') }
         
      </div>
    );
  }
}

export default Bitcoin;
