import { Card, CardBody, Image } from '@nextui-org/react';
import type { TeamInterface } from '../../../../api/interfaces/team.interface';
import { defaultTeamColor, teamColors, type TeamsColorsInterface } from '../../../../lib/team-colors';
import '../../teams/team.css';

export default function TeamLeaderBoardListItem({ team }: { team: TeamInterface }) {
  const teamColor = teamColors.find(
    (teamColor: TeamsColorsInterface) => teamColor.team === team.name
  ) ?? defaultTeamColor;

  return (
    <Card className="flex flex-row justify-between items-center gap-2 w-[100%]">
      <span
        className='team-gradient absolute'
        style={{
          background: teamColor.gradient,
        }}
      />
      <CardBody className='flex flex-row justify-between items-center gap-1'>
        <div className='flex-1 flex flex-row justify-start items-center gap-2'>
          <Image
            src={team.icon ?? ''}
            radius="sm"
            height={40}
            width={40}
            alt={`Formula one team ${team.name}`}
            key={team.id}
            disableSkeleton={true}
            className="bg-white"
          />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">{team.name}</h4>
          </div>
        </div>
        <div className=' flex flex-col items-end justify-center gap-1 w-[20%]'>
          <p className="text-tiny uppercase font-bold">{team.position} POS</p>
          <small className="text-default-500">{team.points} PTS</small>
        </div>
      </CardBody>
    </Card>
  );
}