import { Backdrop } from '@mui/material';
import logo from './loader.svg';
import './YuvaLoader.css';

function YuvaLoader({ show, color }) {
    return (

        <Backdrop
            className="vh-100"
            sx={{ color: 'yellow', zIndex: 3000 }}
            open={show ? show : true}
        >
            <div className="yloader">
                <img src={logo} className="yloader-logo" alt="logo" />
            </div>
        </Backdrop>
    );
}

export default YuvaLoader;