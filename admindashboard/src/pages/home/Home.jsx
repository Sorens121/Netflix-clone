import React from 'react';
import './home.css'
import Featured from '../../component/featured/Featured'
import Chart from '../../component/charts/Chart';
import {userData}  from '../../dummydata';
import WidgetsSM from '../../component/widgets/WidgetSM';
import WidgetLG from '../../component/widgets/WidgetLG';

export default function Home() {
  return (
        <div className='home'>
            <Featured />
            <Chart data={userData} title="User Analytics" grid dataKey="ActiveUsers"/>

            <div className="homeWidgets">
                <WidgetsSM/>
                <WidgetLG/>
            </div>
        </div>
    );
}
