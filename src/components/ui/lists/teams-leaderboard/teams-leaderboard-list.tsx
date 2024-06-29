import type { TeamInterface } from '../../../../api/interfaces/team.interface';
import TeamLeaderBoardListItem from './team-leaderboard-list-item';

export const TeamsLeaderboardList = ({ teams }: { teams: TeamInterface[] }) => {
  return (
    <div className='flex flex-col justify-start items-start gap-2'>
      {teams.map((team) => <TeamLeaderBoardListItem key={team.id} team={team} />)}
    </div>
  )
};