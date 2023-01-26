import React, { Component } from 'react'

class   Footer extends Component {
  render() {
    return (
        <div className="footer">
            <div style={{display:"flex",width:"180px" ,justifyContent:"space-between" ,alignItems:"center"}}>
                <img
                    src="https://img.icons8.com/ios-glyphs/30/null/cinema---v1.png"
                    style={{ height: "20%", filter: "invert(1)" }}
                    alt="FlimFrenzy"
                />
                <div>FilmFrenzy</div>
            </div>
            <div>TMDB</div>
        </div>
    );
  }
}

export default Footer