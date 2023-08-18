import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}

function NavigationLink({to, title, className}) {
    return (
       <NavLink to ={to} className={"nav-link " + (className ? className : "")}>{title}</NavLink>
    );
}

export default NavigationLink;