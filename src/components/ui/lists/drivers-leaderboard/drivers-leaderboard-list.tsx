
import { useEffect, useState } from 'react';
import { DriversAPI } from '../../../../api/endpoints/drivers';
import DriverLeaderBoardListItem from './driver-leaderboard-list-item';
import type { DriverDB } from '../../../../api/interfaces/driver.interface';

export const DriversLeaderboardList = () => {
  const [drivers, setDrivers] = useState<DriverDB[]>([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const driversData: DriverDB[] = await DriversAPI.getDrivers();
      console.log(driversData);
      setDrivers(driversData);
    };

    fetchDrivers();
  }, []);

  return (
    <div className='flex flex-col justify-start items-start gap-2'>
      {drivers.map((driver) => <DriverLeaderBoardListItem driver={driver} />)}
    </div>
  )
};