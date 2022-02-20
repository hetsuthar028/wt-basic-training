import React from 'react';

const Tagliterals = () => {

    const getText = (str1, ...str2) => {
        console.log("Str1", str1);
        console.log("Str2", str2);
        return "Something";
    }

    const handleClick = () => {
        let param1 = 123;
        let param2 = 234;
        // console.log(getText`${param1} This is param1 ${param1} ${param1} & this is param2 ${param2}`);
        // console.log(getText`This is param1 ${param1}`);
        console.log(getText`${param1} This is param1`);
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handleClick}>Get</button>
        </div>
    );
}

export default Tagliterals;
