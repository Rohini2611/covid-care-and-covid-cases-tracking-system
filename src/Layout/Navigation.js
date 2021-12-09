import { NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation= () => {

    return (
    <header className={classes.header}>
    <div className={classes.logo}>Covid Care and Covid Cases Tracking System</div>
    <nav className={classes.nav}>
    <ul>
    <li>
    <NavLink to='Home'>
    Home
    </NavLink>
    </li>
    <li>
    <NavLink to='Health' activeClassName={classes.active}>
    Heath
    </NavLink>
    </li>
    <li>
        <NavLink to='Vaccine' activeClassName={classes.active}>
    Vaccine
    </NavLink>
    </li>
    </ul>
    </nav>
        </header>
    );
}

export default Navigation;