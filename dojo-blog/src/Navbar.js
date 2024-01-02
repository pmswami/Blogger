import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}
                {/* Inline styling
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;