import React, {useState} from 'react';
import Button from './btnConponet.jsx'

const TestBtn = () => {
    const [flag, setFlag] = useState(false);
    const handleClick = () => {
        setFlag(true);
        setTimeout(() => {
        setFlag(false);
        },2000)
    };


    // const handleClick = () => {
    //     alert('Button clicked!');
    // };

    return (
        <div>
            {/*<Button onClick={handleClick}>点我</Button>*/}
            <Button disabled={flag} onClick={handleClick}>登录</Button>
            {/*<Button style={{ backgroundColor: 'green' }}>Custom Style Button</Button>*/}
        </div>
    );
};

export default TestBtn;
