
import React from 'react';

const featurespage = ({params}) => {
    console.log({params});
    if(params.features.length == 3 ) 
        return <div>{params.features[2]}</div>
        if(params.features.length == 2) 
            return <div>{params.features[1]}</div>
    return (
        <div>
            category details
        </div>
    );
};

export default featurespage;