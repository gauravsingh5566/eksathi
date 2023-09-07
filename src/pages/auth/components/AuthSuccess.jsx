import { useGlobalContext } from 'global/context';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const AuthSuccess = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const token = searchParams.get('token');
    const navigate = useNavigate();
    const { api, setUser, setToken, setAuthToken } = useGlobalContext();

    const authorise = async () => {
        console.log('TOKEN', token);
        toast.loading("Authenticating...");
        try {
            const res = await api.post('/oauth2/authorize', { token });
            if (res?.status === 200) {
                toast.dismiss();
                if (res?.data?.user?.status === "Active") {
                    setUser(res.data.user);
                    setToken(res.data.jwt);
                    localStorage.setItem('isLogin', true);
                    toast.success("Welcome");
                    navigate(`/institute/profile`);
                } else if (res?.data?.user?.status === "Onboarding") {
                    setUser(res?.data?.user);
                    setToken(res?.data?.jwt);
                    localStorage.setItem("isLogin", true);
                    toast.success("Welcome");
                    navigate(`/institute/onboarding`);
                } else if (res?.data?.user?.status === "Suspended") {
                    toast("Account is suspended")
                    navigate(`/institute/suspended`);
                } else {
                    navigate('/auth/institute/login');
                    toast.error("Something went wrong. Please try again")
                }
            }


        } catch (error) {
            console.log(error);
            toast.dismiss();
            navigate('/auth/institute/login');
        }
    }

    useEffect(() => {
        authorise();
    }, [token]);
    return (
        <div>Please wait! authentication is in progress...</div>
    )
}

export default AuthSuccess;