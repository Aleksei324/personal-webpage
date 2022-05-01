import {useState} from 'react';

function Values(h, w, d, r) {
    const [getValues, setValues] = useState({
        height: h, width: w, dificulty: d, render: r
    });

    return [getValues, setValues]
}

export default Values;