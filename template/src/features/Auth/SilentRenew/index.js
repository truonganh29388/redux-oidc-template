import { Spinner } from "reactstrap";
import { processSilentRenew } from "redux-oidc";

function SilentRenew() {
   processSilentRenew();
    return (
        <Spinner color="warning" type="grow">Renewing...</Spinner>
    );
};

export default SilentRenew;
