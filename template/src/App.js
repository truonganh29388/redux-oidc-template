import { Header, Layout, NotFound, ProtectedRoute } from 'components';
import { removeUser, SignIn, SignInCallback, SignOut, SignOutCallback, SilentRenew, storeUser } from 'features/Auth';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { userManager } from 'utils';
import './App.css';

import Home from 'features/Home';
import Test from 'features/Test';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      return await userManager.getUser();
    }

    getUser().then(user => {
      if (user) {
        const { profile } = user;
        dispatch(storeUser(profile));
      }
    }).catch(console.error);

    return () => {
      dispatch(removeUser());
    }
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<Spinner color="warning"
        type="grow">Loading...</Spinner>}>
        <BrowserRouter>
          <Header />
          <Layout>
            <Routes>
              <Route exact path="/" element={<ProtectedRoute children={<Home />} />} />
              <Route exact path="/test" element={<ProtectedRoute children={<Test />} redirectUrl="/test" />} />
              <Route exact path="/signout" element={<ProtectedRoute children={<SignOut />} />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signin/callback" element={<SignInCallback />} />
              <Route path="/signout/callback" element={<SignOutCallback />} />
              <Route exact path="/silent_renew" element={<SilentRenew/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
