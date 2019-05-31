import React from 'react';
import { withRouter } from 'react-router-dom';

import auth from './auth';

const AuthButton = withRouter(
  ({ history }) =>
    auth.isAuthenticated ? (
      <p>
        <button
          type="button"
          className="btn btn-default navbar-btn"
          onClick={() => {
            auth.logout(() => history.push("/admin"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <div className="alert alert-danger" role="alert">You are not logged in.</div>
    )
);

export default AuthButton;