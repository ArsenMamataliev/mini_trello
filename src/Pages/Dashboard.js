import React from 'react';
import DashboardBox from '../components/dashboard/DashboardBox';
import AccountMenu from '../components/Menu/AccountMenu';
import { useSelector } from 'react-redux';
import LoginBtn from '../components/auth/LoginBtn';

function Dashboard() {
    const loggedIn = useSelector(state=>state.loggedIn);
    return (
        <div>
            {
                loggedIn? <AccountMenu /> : <LoginBtn/>
            }
            <DashboardBox/>
        </div>
    )
}

export default Dashboard
