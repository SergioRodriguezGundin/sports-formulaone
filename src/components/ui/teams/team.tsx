import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export const Team = ({ team }: { team: any }) => (
  <Card className='py-4 bg-default-50 w-[380px] sm:w-[560px] h-[200px]' isHoverable >
    <CardHeader className="flex gap-3">
      <Image
        alt="formula one team icon"
        radius="sm"
        src={team?.icon}
        width={40}
        height={40}
        className="bg-white"
      />
      <div className="flex flex-col">
        <p className="text-md">{team.name}</p>
        <p className="text-small text-default-500">{team.points} points</p>
      </div>
    </CardHeader>

    <CardBody className='overflow-visible py-2 flex justify-center items-center' >
      <Image
        width={220}
        height={180}
        alt='formula one team'
        className='object-cover rounded-xl'
        src={team?.car}
      />
    </CardBody>
  </Card>
);

