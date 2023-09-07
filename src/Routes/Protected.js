import { useGlobalContext } from 'global/context';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('isLogin');
    const { token } = useGlobalContext();

    useEffect(() => {
        if (!isLogin || !token) {
            navigate('/auth/login');
        }

    }, []);

    return (
        <>
            {
                isLogin ? 
                <Component /> : null
            }
                
        </>
    )
}

export default Protected;