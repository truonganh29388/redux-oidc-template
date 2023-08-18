import { removeUser } from 'features/Auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { SignoutCallbackComponent } from 'redux-oidc';
import { userManager } from 'utils';

function SignOutCallback() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const successCallback = () => {
        dispatch(removeUser());       
        navigate("/signin");
    };

    const errorCallback = (error) => {
        navigate("/");
    };

    return (
        <SignoutCallbackComponent userManager={userManager} successCallback={successCallback} errorCallback={errorCallback} >
            <Spinner color="warning" type="grow">Redirecting...</Spinner>
        </SignoutCallbackComponent>
    );
}

export default SignOutCallback;