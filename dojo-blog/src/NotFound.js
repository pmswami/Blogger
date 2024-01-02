import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Go to Home</Link>
        </div>
     );
}
 
export default NotFound;