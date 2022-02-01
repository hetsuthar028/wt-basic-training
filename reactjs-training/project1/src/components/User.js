import React from 'react';

const User = (props) => {
    
    let {userId} = props;

    return (
        <div>
            User Component - {userId}
        </div>
    );
}

export default User;
