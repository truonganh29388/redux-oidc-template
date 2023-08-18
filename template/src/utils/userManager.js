import { WebStorageStateStore } from 'oidc-client';
import { createUserManager } from 'redux-oidc';

const config = {
    authority: process.env.REACT_APP_AUTHORITY,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: window.location.origin + "/signin/callback",
    post_logout_redirect_uri: window.location.origin + "/signout/callback",
    silent_redirect_uri: window.location.origin + "/silent_renew",
    automaticSilentRenew: true,
    response_type: "id_token token",
    prompt: "login",
    scope: "openid profile",
    loadUserInfo: true,
    userStore: new WebStorageStateStore({ store: window.localStorage })
};

const userManager = createUserManager(config);
export default userManager;
