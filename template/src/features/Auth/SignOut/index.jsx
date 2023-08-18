import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { userManager } from 'utils';

function SignOut() {
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();
    
    useEffect(() => {
        const signOut = ( () => {
           userManager.signoutRedirect();
        })
        if (user) {
            signOut();
        } else {
            navigate("/signin");
        }

    }, []);

    return (
        <Spinner color="warning" type="grow">Redirecting...</Spinner>
    );
}

export default SignOut;