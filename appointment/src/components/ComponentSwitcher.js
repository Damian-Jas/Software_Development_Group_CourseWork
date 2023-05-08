import React, { useState } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

function ComponentSwitcher() {
    const [currentComponent, setCurrentComponent] = useState('ComponentOne');

    const handleClick = () => {
        if (currentComponent === 'ComponentOne') {
            setCurrentComponent('ComponentTwo');
        } else if (currentComponent === 'ComponentTwo') {
            setCurrentComponent('ComponentThree');
        } else {
            setCurrentComponent('ComponentOne');
        }
    };

    return (
        <div>
            {currentComponent === 'ComponentOne' && <ComponentOne />}
            {currentComponent === 'ComponentTwo' && <ComponentTwo />}
            {currentComponent === 'ComponentThree' && <ComponentThree />}
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    );
}

export default ComponentSwitcher;
