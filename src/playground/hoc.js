import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info} </p>
    </div>
);

const requireAuthentication = (WrappedComponenet) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponenet {...props} /> : <p>Please authenticate</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='the details' /> , document.getElementById('app'));