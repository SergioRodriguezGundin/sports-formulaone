import type { DriverInterface } from '../../../../api/interfaces/driver.interface';
import DriverLeaderBoardListItem from './driver-leaderboard-list-item';

export const DriversLeaderboardList = ({ drivers }: { drivers: DriverInterface[] }) => {
  return (
    <div className='flex flex-col justify-start items-start gap-2'>
      {drivers.map((driver) => <DriverLeaderBoardListItem key={driver.id} driver={driver} />)}
    </div>
  )
};