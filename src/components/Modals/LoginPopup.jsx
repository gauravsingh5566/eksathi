import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { useGlobalContext } from 'global/context';
import { Done, Google, LinkedIn, Visibility, VisibilityOff } from '@mui/icons-material';
import { Checkbox, Divider, FormControl, FormHelperText, FormLabel, IconButton, Input, ModalOverflow, Stack } from '@mui/joy';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Popup } from 'layout/Popup';
import { useFormik } from 'formik';
import { InputAdornment } from '@mui/material';
import axios from 'axios';
import RegisterForm from 'pages/auth/components/RegisterForm';
import { toast } from 'react-hot-toast';

export default function LoginPopup() {
    const { setUser, setToken, showAuth, setAuth, api, apiAuth } = useGlobalContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [registeredId, setRegisteredId] = useState(false);
    const endpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authToken, setAuthToken] = useState("");
    const [timeRemaining, setTimeRemaining] = useState();
    const [authType, setAuthType] = useState('login');

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const LoginFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, action) => {
            // Popup("loading", "Submitting...");
            let notify = toast.loading("Signing in...");
            setEmail(values.email);
            setPassword(values.password);
            try {
                const res = await api.post("app/auth/signin", values);
              
                console.log(res);

                if (res?.status == 200) {
                    setUser(res?.data?.user);
                    setToken(res?.data?.jwt);
                    setAuthToken(res?.data?.jwt);
                    localStorage.setItem('isLogin', true);
                    // Popup();
                    toast.dismiss(notify);
                    toast.success('Signed In successfully!')
                    setRegisteredId(res?.data?.userId);
                    setAuth(false);
                    // window.location.reload(true);
                }
            } catch (error) {
                toast.dismiss(notify);
                if (error?.response?.status === 403) {
                    console.log("data", error?.response);
                    // Popup(
                    //     "warning",
                    //     error?.response?.data?.message,
                    //     error?.response?.data?.desc
                    // );
                    toast.error( error?.response?.data?.message);
                    // setExpirationTime(error?.response?.data?.exirationTime);
                    setTimeRemaining(error?.response?.data?.expiratpionTime);
                    startTimeCounter(error?.response?.data?.expirationTime);
                    setRegisteredId(error?.response?.data?.userId);
                } else {
                    // Popup("error", error?.response?.data?.message);
                    toast.error(error?.response?.data?.message)
                }
            }
        },
    });

    //   OTP Verification
    const OtpFormik = useFormik({
        initialValues: {
            code: "",
        },
        onSubmit: async (values, action) => {
            // Popup("loading", "Submitting...");
            const otpnotify = toast.loading("Verifying code...");
            values = { ...values, userId: registeredId };
            try {
                const res = await api.post(
                    `/app/auth/verify-otp`,
                    values
                );
                console.log(res);
                if (res.status == 200) {
                    // Popup("success", res.data.message);
                    toast.dismiss(otpnotify);
                    toast.success(res.data.message);
                    setAuth(false);
                    LoginFormik.handleSubmit();
                    // window.location.reload();
                }
            } catch (error) {
                toast.dismiss(otpnotify);
                // Popup("error", error?.response?.data?.message);
                toast.error(error?.response?.data?.message);
            }
        },
    });

    const resendOTP = async () => {
        const resendNotify = toast.loading("Sending new otp...");
        try {
            const res = await axios.post(endpoint + "app/auth/send-otp", {
                email,
                password
            });
            console.log(res);
            if (res.status == 200) {
                // Popup("success", res.data.message);
                toast.dismiss(resendNotify);
                toast.success(res.data.message);
                // setExpirationTime(res.data.expirationTime);
                // setTimeRemaining(res.data.expirationTime);
                startTimeCounter(res.data.expirationTime);
            }
        } catch (error) {
            toast.dismiss(resendNotify);
            console.log(error);
            // Popup("error", error?.response?.data?.message);
            toast.error(error?.response?.data?.message);
        }
    };

    const startTimeCounter = (expirationTime) => {
        const interval = setInterval(() => {
            // Calculate time remaining
            const now = new Date().getTime();
            const expiration = new Date(expirationTime).getTime();
            const timeDiff = expiration - now;
            const newTimeRemaining = Math.max(0, timeDiff);

            // Calculate remaining time in minutes and seconds
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            // Update state with new time remaining
            setTimeRemaining({ minutes, seconds });

            // Stop interval if time has expired
            if (newTimeRemaining === 0) {
                clearInterval(interval);
            }
            console.log("Time remaining: ", newTimeRemaining);
        }, 1000);

        return () => clearInterval(interval);
    }


    return (
        <React.Fragment>
            {/* <Button variant="outlined" color="neutral" onClick={() => setAuth(true)}>
        showAuth modal
      </Button> */}
            <Transition in={showAuth} timeout={400}>
                {(state) => (
                    <Modal
                        keepMounted
                        showAuth={!['exited', 'exiting'].includes(state)}
                        onClose={() => setAuth(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: 'none',
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                        entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === 'exited' ? 'hidden' : 'visible',
                        }}
                    >
                        <ModalOverflow>
                        <ModalDialog
                            aria-labelledby="fade-modal-dialog-title"
                            aria-describedby="fade-modal-dialog-description"
                            sx={{
                                zIndex: 5,
                                minWidth: 400,
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                            }}
                        >
                            <div className="my-4">

                                {
                                    !registeredId ?
                                        authType === 'login' ?
                                            <form
                                                onSubmit={LoginFormik.handleSubmit}
                                            >
                                                <div className="header text-center">
                                                    <img src="/images/logo.png" alt="EkSathi" 
                                                    style={{
                                                        width: '3rem'
                                                    }} />
                                                    <h4 className='fw-bold mb-2'>Welcome Back</h4>
                                                    <h6>Please enter the details to sign in</h6>
                                                </div>
                                                {/* <div className="my-3 d-grid gap-2 d-md-flex justify-content-between">
                                    <Button variant="outlined" color="neutral">
                                        <Google className='mr-2' /> Google
                                    </Button>
                                    <Button variant="outlined" color="neutral">
                                        <LinkedIn className='mr-2' /> LinkedIn
                                    </Button>
                                </div> */}
                                                <Divider className='my-4' />
                                                <Stack spacing={2}>
                                                    <FormControl>
                                                        <FormLabel>Email</FormLabel>
                                                        <Input autoFocus
                                                            required
                                                            placeholder='example@example.com'
                                                            id="email"
                                                            name="email"
                                                            type={"email"}
                                                            value={LoginFormik.values.email}
                                                            onChange={LoginFormik.handleChange}
                                                            error={
                                                                LoginFormik.touched.email &&
                                                                Boolean(LoginFormik.errors.email)
                                                            }
                                                            helperText={
                                                                LoginFormik.touched.email && LoginFormik.errors.email
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <FormLabel>Password</FormLabel>
                                                        <Input
                                                            placeholder="Your Password"
                                                            type={showPassword ? "text" : "password"}
                                                            id="password"
                                                            name="password"
                                                            value={LoginFormik.values.password}
                                                            onChange={LoginFormik.handleChange}
                                                            error={
                                                                LoginFormik.touched.password &&
                                                                Boolean(LoginFormik.errors.password)
                                                            }
                                                            required
                                                            endDecorator={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                        {LoginFormik.touched.password && (
                                                            <FormHelperText sx={{ color: "red" }}>
                                                                {LoginFormik.errors.password}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                    <div className="d-flex justify-content-between">
                                                        <Checkbox
                                                            uncheckedIcon={<Done />}
                                                            label="Remenber for 30 days"
                                                            slotProps={{
                                                                root: ({ checked, focusVisible }) => ({
                                                                    sx: !checked
                                                                        ? {
                                                                            '& svg': { opacity: focusVisible ? 0.32 : 0 },
                                                                            '&:hover svg': {
                                                                                opacity: 0.32,
                                                                            },
                                                                        }
                                                                        : undefined,
                                                                }),
                                                            }}
                                                        />
                                                        <Link to='/auth/recover' onClick={() => setAuth(false)}>Forget Password?</Link>
                                                    </div>
                                                    <Button type="submit">Sign In</Button>
                                                    <div className="text-center">
                                                        <div className='text-grey'>Don't have an account?
                                                            <Link
                                                                to='/auth/register'
                                                                onClick={() => setAuthType('register')}
                                                                className='text-underline text-black'>Create account
                                                            </Link></div>
                                                    </div>
                                                </Stack>

                                            </form> :
                                            <>
                                                <div className="header text-center">
                                                    <img src={require('../../assets/logo.png')} alt="EkSathi" style={{
                                                        width: '2.5rem'
                                                    }} />
                                                    <h4 className='fw-bold mb-2'>Welcome to Eksathi</h4>
                                                    <h6>Please enter the details to sign up</h6>
                                                </div>

                                                <Divider className='my-4' />
                                                <RegisterForm />
                                            </>
                                        :
                                        <>
                                            <form
                                                className="form-action-wrapper py-5"
                                                onSubmit={OtpFormik.handleSubmit}
                                            >
                                                <FormControl className="form-group">
                                                    <FormLabel>Enter One Time Password</FormLabel>
                                                    <Input
                                                        fullWidth
                                                        label={"Enter your OTP"}
                                                        type='text'
                                                        id="code"
                                                        name="code"
                                                        placeholder="Your 6 digit Secure OTP, Recieved on registered email."
                                                        value={OtpFormik.values.code}
                                                        onChange={OtpFormik.handleChange}
                                                        error={OtpFormik.touched.code && Boolean(OtpFormik.errors.code)}
                                                        helperText={OtpFormik.touched.code && OtpFormik.errors.code}
                                                    />
                                                </FormControl>

                                                <Button
                                                    fullWidth
                                                    type="submit"
                                                    size="large"
                                                    sx={{ p: 2 }}
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Verify
                                                </Button>
                                            </form>
                                            <div className="text-center">

                                                {
                                                    timeRemaining?.seconds >= 0 ?
                                                        <p><span className="text-danger">{`${timeRemaining?.minutes}:${timeRemaining?.seconds}`}</span> left</p>
                                                        : <button disabled={timeRemaining?.seconds <= 0 ? false : true} type="button" className="btn btn-link" onClick={resendOTP}>Resend OTP</button>
                                                }


                                            </div>
                                        </>
                                }
                            </div>

                        </ModalDialog>
                        </ModalOverflow>
                    </Modal>
                )}
            </Transition>
        </React.Fragment>
    );
}
