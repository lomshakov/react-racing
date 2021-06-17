import React from "react";
import {Route, RouteProps} from "react-router-dom";

interface NormalRouteProps extends RouteProps {}

interface Props {
    layout: React.FC;
    component: React.FC;
}

const NormalRoute:React.FC<NormalRouteProps & Props> = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }
        />
    );
};

export default NormalRoute;