import { Link } from 'react-router-dom';
import '../Styles/style.css';
import Home from '../Pages/Home.js';
import Animals from '../Pages/Animals.js';
import Employees from '../Pages/Employees.js';

function Header() {
    return (
        <div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/Animals">Animals</Link>
                <Link to="/Employees">Employees</Link>
            </div>
        </div>
    );
}

export default Header;