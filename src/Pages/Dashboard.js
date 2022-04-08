import React from 'react';
import DashboardBox from '../components/dashboard/DashboardBox';
import AccountMenu from '../components/Menu/AccountMenu';
import { useSelector } from 'react-redux';
import LoginBtn from '../components/auth/LoginBtn';
import ScrollToTop from 'react-scroll-up';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Dashboard() {
    const loggedIn = useSelector(state=>state.loggedIn);
    return (
        <div>
            {
                loggedIn? 
                    <>
                        <AccountMenu /> 
                        <DashboardBox/>
                    </>
                    : <LoginBtn/>
            }
            
            <ScrollToTop showUnder={500}>
                <ArrowUpwardIcon sx={{ color: "red", fontSize: 40}}/>
            </ScrollToTop>
        </div>
    )
}

export default Dashboard
