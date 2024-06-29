import { Card, CardBody, Image } from '@nextui-org/react';
import type { DriverInterface } from '../../../../api/interfaces/driver.interface';

export default function DriverLeaderBoardListItem({ driver }: { driver: DriverInterface }) {
  return (
    <Card className="flex flex-row justify-between items-center gap-2 w-[100%]">
      <CardBody className='flex flex-row justify-between items-center gap-1'>
        <div className='flex flex-row justify-start items-center gap-2'>
          <Image
            src={driver.image}
            radius="sm"
            height={40}
            width={40}
            alt={`Formula one driver ${driver.name}`}
            key={driver.id}
            disableSkeleton={true}
            className="bg-background"
          />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">{driver.name}</h4>
            <h5 className="text-small tracking-tight text-default-400">{driver.team?.name ?? '-'}</h5>
          </div>
        </div>
        <div className='flex flex-col items-end justify-center gap-1'>
          <p className="text-tiny uppercae font-bold">{driver.position} POS</p>
          <small className="text-default-500">{driver.points} PTS</small>
        </div>
      </CardBody>
    </Card>
  );
}