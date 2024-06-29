
import type { DriverDB } from '../../../../api/interfaces/driver.interface';
import DriverLeaderBoardListItem from './driver-leaderboard-list-item';

export const DriversLeaderboardList = ({ drivers }: { drivers: DriverDB[] }) => {
  return (
    <div className='flex flex-col justify-start items-start gap-2'>
      {drivers.map((driver) => <DriverLeaderBoardListItem driver={driver} />)}
    </div>
  )
};