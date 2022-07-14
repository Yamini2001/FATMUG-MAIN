import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom' ; 
function Layout(pros)
{
    return (
        <div>
            <Header/>
            {pros.children}
        </div>
          
    
    )
}
function Header()
{
return (
<nav className="navbar navbar-expand-lg navbar-light border-bottom">
  <Link className="navbar-brand" to="/">FATMUG <span>| Greating ! Johny Depp </span> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
    
        <Link  className="btn btn-outline-secondary ml-1" style={{ textDecoration: "none" , textColor : "none" }} to="/write">Write</Link>
      
       <Link  className="btn btn-outline-secondary ml-1 " style = {{ textDecoration: "none", textColor : "none" }} to="/user">Your Articles</Link>
      
       <Link  className="btn btn-outline-secondary ml-1 " style={{ textDecoration: "none", textColor : "none" }} to="/login">Login</Link>
      
    </div>
   
</nav>

    );
}
export default Layout; 