import React from "react";
import { connect } from "react-redux";

const Index = () => {
  <div>
    <HashRouter history={hashHistory}>
      <Switch>
          <Redirect from="/" to="/login" />
      </Switch>
    </HashRouter>
  </div>;
};

export default connect(dispatch => ({ dispatch }))(Index);
