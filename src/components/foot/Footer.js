import React, { Component } from 'react';
import { Button } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <footer style={{textAlign: "center", background: "#121212", paddingTop:"20px", marginTop:"20px"}}>
        <div style={{display: "inline-block"}}>
          <p style={{color: "#ffffff" }}>This is a footer</p>
        </div>
        
      </footer>
    )
  }
}

export default Footer;