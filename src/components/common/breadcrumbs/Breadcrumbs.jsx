// Breadcrumbs.js

import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
        <div className="breadcrumb">
        <Link to="/home" style={{textDecoration:'none', color:'gray'}}>Home</Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <span key={to} className="breadcrumb-item">
              <IoIosArrowForward style={{color:'gray', marginBottom:'-3px'}} /> 
              <Link style={{textDecoration:'none',color:'gray',}} to={to}>{value}</Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
