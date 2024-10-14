import React from 'react';

const Button = ({ type = 'button', onClick, disabled = false, children, style }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                padding: '10px 20px',
                backgroundColor: disabled ? '#ccc' : '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                ...style, // 可以传入额外的自定义样式
            }}
        >
            {children}
        </button>
    );
};

export default Button;