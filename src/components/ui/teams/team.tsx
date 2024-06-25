import { Card, CardHeader, CardBody, Image, Divider } from '@nextui-org/react';
import { defaultTeamColor, teamColors, type TeamsColorsInterface } from '../../../lib/team-colors';
import './team.css';

export const Team = ({ team }: { team: any }) => {
  const teamColor = teamColors.find(
    (teamColor: TeamsColorsInterface) => teamColor.team === team.name
  ) ?? defaultTeamColor;

  return (
    <Card className='bg-default-50 w-[380px] sm:w-[560px] h-[200px]' isHoverable >
      <span
        className='team-gradient'
        style={{
          background: teamColor.gradient,
        }}
      />
      <CardHeader className="flex gap-3 p-5">
        <div className="flex flex-row justify-start items-center gap-2 w-full">
          <Image
            src={team?.icon}
            radius="sm"
            width={40}
            height={40}
            disableSkeleton={true}
            className="bg-white"
            alt="formula one team icon"
          />
          <p className="text-md">{team.name}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <span className='text-lg font-bold'>{team.position}</span> <small className='text-secondary'>POS</small>
            <Divider orientation="vertical" />
            <span className='text-lg font-bold'>{team.points}</span> <small className='text-secondary'>PTS</small>
          </div>
        </div>
      </CardHeader>
      <CardBody className='flex justify-center items-center overflow-visible ' >
        <Image
          src={team?.car}
          radius="sm"
          width={220}
          height={180}
          disableSkeleton={true}
          alt='formula one team'
        />
      </CardBody>
    </Card>
  );
}
