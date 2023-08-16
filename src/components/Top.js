import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="#">
          MyNews
        </Link>
        
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Health">
                Health
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                Gernal
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="Science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Sports">
                sports
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link disabled" to="#"></Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Top;
