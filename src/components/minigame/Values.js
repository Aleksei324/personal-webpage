import {useState} from 'react';

function Values(h, w, d, r) {
    const [getValues, setValues] = useState({
        height: h, width: w, dificulty: d, render: r
    });

    return [getValues, (re) => {
        setValues({height: getValues.height, width: getValues.width, dificulty: getValues.dificulty, render: re});
    }]
}

export default Values;