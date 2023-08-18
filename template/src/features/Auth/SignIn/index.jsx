import { SignInButton } from 'custom-fields';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { userManager } from 'utils';

function SignIn() {
  const user = useSelector((state) => state.auth.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");

  const signIn = () => {
    userManager.signinRedirect({
      extraQueryParams: {
        localPath: redirectUrl
         //need to Add LocalPath property into LoginInputModel in IdentityServer
         //And change the logic to redirect to the correct URL
      }
    });
  }

  return user ? (
    <Navigate to={redirectUrl ?? "/"} />
  ) : (
    <div>
      <SignInButton onClick={signIn} />
    </div>
  );
}

export default SignIn;