import { storeUser } from 'features/Auth';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { CallbackComponent } from 'redux-oidc';
import { userManager } from 'utils';

function SignInCallback(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectUrl = searchParams.get("redirectUrl");
    
    const successCallback = (user) => {
        const { profile } = user;
        dispatch(storeUser(profile));
        navigate(redirectUrl ?? "/");
    };

    const errorCallback = (error) => {
        navigate("/");
    };

    return (
        <CallbackComponent userManager={userManager} successCallback={successCallback} errorCallback={errorCallback}>
            <div><Spinner color="warning" type="grow">Redirecting...</Spinner></div>
        </CallbackComponent>
    );
}

export default SignInCallback;