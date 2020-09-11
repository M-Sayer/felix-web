import React from 'react';

const Button = ({className , ...props}) => {
    return <button className={['Button', className].join(' ')} {...props}/>
}

export {
    Button,
}