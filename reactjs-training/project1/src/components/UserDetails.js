import React from 'react';

const Userdetails = (props) => {

    let { userId } = props;

    return (
        <div>
            UserDetails Component - {userId}
        </div>
    );
}

export default Userdetails;
