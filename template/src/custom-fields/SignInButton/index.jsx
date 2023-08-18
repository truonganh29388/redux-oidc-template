import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

SignInButton.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};

SignInButton.defaultProps = {
    title: "Login",
    id: "btnLogin",
    color: "primary",
    onClick: null
}

function SignInButton(props) {
    const {title, id, color, onClick} = props;

    return (
        <Button color={color} id={id} onClick={onClick}>
            {title}
        </Button>
    );
}

export default SignInButton;