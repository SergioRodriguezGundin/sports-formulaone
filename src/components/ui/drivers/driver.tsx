import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import type { DriverInterface } from '../../../api/interfaces/driver.interface';
import { defaultTeamColor, teamColors, type TeamsColorsInterface } from '../../../lib/team-colors';
import './driver.css';

export const Driver = ({ driver }: { driver: DriverInterface }) => {
  const teamColor = teamColors.find(
    (teamColor: TeamsColorsInterface) => teamColor.team === driver?.team?.name
  ) ?? defaultTeamColor;

  return (
    <Card className='bg-default-50 w-[280px] sm:w-[340px] h-[380px]' isHoverable >
      <span
        className='driver-gradient'
        style={{
          background: teamColor.gradient,
        }}
      />
      <CardHeader className="flex gap-3 p-5">
        <div className='flex flex-col gap-2 justify-center items-start w-[100%]'>
          <div className='flex flex-row justify-between items-center gap-1 w-[100%]'>
            <p className="text-md">{driver.name}</p>
            <Image
              src={driver.nationality}
              radius="sm"
              width={40}
              height={28}
              disableSkeleton={true}
              alt={`driver ${driver.name} nationality `}
            />
          </div>
          <Divider className='my-2' />
          <div className='flex flex-row justify-center items-center gap-2'>
            <span className='text-lg font-bold'>{driver.position}</span> <small className='text-secondary'>POS</small>
            <Divider orientation="vertical" />
            <span className='text-lg font-bold'>{driver.points}</span> <small className='text-secondary'>PTS</small>
          </div>
        </div>
      </CardHeader>
      <CardBody className='relative flex justify-center items-center overflow-visible p-0' >
        <div className='absolute inset-x-50 bottom-0'>
          <Image
            src={driver.image}
            radius="sm"
            width={250}
            height={220}
            disableSkeleton={true}
            alt={`formula one driver ${driver.name}`}
          />
        </div>
      </CardBody>
    </Card>
  );
}
