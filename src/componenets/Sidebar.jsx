import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark sidebardiv" style={{ width: '230px' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4"><img src="../src/images/Blogify.png" alt="logoImage" className='logoimage' /></span>
      </Link>
      <hr className='text-white'/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white" >
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-blog" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Create NewBlog
          </Link>
        </li>
        <li>
          <Link to="/trending" className="nav-link text-white link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            Trending
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;
