import React from "react";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="text-center border border-danger rounded p-4">
            <h1 className="display-4 text-danger">404 - Page Not Found</h1>
            <p className="lead">
              Sorry, the page you are looking for does not exist.
            </p>
            <div className="mt-4">
              <a href="/" className="btn btn-outline-danger btn-sm">
                Back To Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
