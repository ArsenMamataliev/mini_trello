import React from 'react';
import { useSelector } from 'react-redux';
import AddDashboardModal from '../../modalBoxes/AddDashboardModal';
import DashPattern from './DashPattern';

const DashboardBox = () => {
    const dashboards = useSelector((state) => state.dashboards);
    return (
        <>
            <div className="dashboard-container">

               {
                    dashboards.map((item, index) =>
                        <DashPattern 
                        key = {item.id}
                        index = {index}
                        id = {item.id}
                        tasks = {item.tasks} 
                        name = {item.name}  
                        />
                    )
                }
                <AddDashboardModal/>
            </div>
       </>
    );
};

export default DashboardBox;