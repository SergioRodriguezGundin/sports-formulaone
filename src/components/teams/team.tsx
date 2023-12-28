import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export const Team = ({ team }: { team: any }) => (
  <Card className='py-4 bg-default-50 w-[320px] h-[380px]' isHoverable >
    <CardHeader
      className='pb-0 pt-2 px-4 flex-col items-start'
    >
      <h4 className='font-bold text-large'>{team.name}</h4>
      <p className='text-tiny uppercase font-bold text-primary'>{team.engine}</p>
      <small className='text-default-500 mt-4'>
        {team.base}
      </small>
    </CardHeader>
    <CardBody className='overflow-visible py-2 flex justify-center items-center' >
      <Image
        width={220}
        height={180}
        alt='formula one team'
        className='object-cover rounded-xl'
        src={team.logo}
      />
    </CardBody>
  </Card>
);

