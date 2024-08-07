import { FunctionComponent, ReactElement } from "react";
import { useSelector } from "../../utils/hooks";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedProps = {
    onlyUnAuth?: boolean,
    component: ReactElement
}

const Protected: FunctionComponent<TProtectedProps> = ({ onlyUnAuth = false, component }) => {
    const isAuthChecked = useSelector((store) => store.tokenReducer.isRequest);
    const user = useSelector((store) => store.loginInfo.userInfo);
    const location = useLocation();

    if (isAuthChecked) {
        return null;
    }

    if (onlyUnAuth && user) {
        const { from } = location.state || { from: { pathname: "/" } };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return component;
};

export const OnlyAuth: FunctionComponent<TProtectedProps> = Protected;
export const OnlyUnAuth: FunctionComponent<TProtectedProps> = ({ component }) => (
    <Protected onlyUnAuth={true} component={component} />
);
