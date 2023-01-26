import React from "react";
import "./styles.css";

function Nav() {
        return (
            <div>
                <div className="nav">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "175px",
                        }}
                    >
                        <img
                            src="https://img.icons8.com/ios-glyphs/30/null/cinema---v1.png"
                            style={{ height: "75%", filter: "invert(1)" }}
                            alt="FlimFrenzy"
                        />
                        <div>FilmFrenzy</div>
                    </div>
                    {/* 
                        <img
                            src="https://img.icons8.com/material-outlined/24/null/search--v1.png"
                            style={{ height: "65%", filter: "invert(1)" }}
                            alt="Search"
                        /> 
                        <form>
                            <input
                                type="text"
                                className="search_input"
                                placeholder="🧐 Search Movie"
                            ></input>
                        </form>
                    */}
                </div>
            </div>
        );
}

export default Nav;
