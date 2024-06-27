import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import type { DriverDB } from '../../../../api/interfaces/driver.interface';

export default function DriverLeaderBoardListItem({ driver }: { driver: DriverDB }) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          src={driver.image}
          radius="sm"
          height={40}
          width={40}
          alt="f1 driver icon"
        />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="text-small font-semibold leading-none text-default-600">{driver.name}</h4>
          <h5 className="text-small tracking-tight text-default-400">{driver.team?.name ?? '-'}</h5>
        </div>
      </CardHeader>
      <CardBody>
        <div className='flex flex-col gap-1 items-end justify-center'>
          <p className="text-tiny uppercase font-bold">{driver.position} POS</p>
          <small className="text-default-500">{driver.points} PTS</small>
        </div>
      </CardBody>
    </Card>
  );
}