import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

export const Circuit = ({ circuit }: { circuit: any }) => (
  <Card className='py-4 bg-default-50 w-[320px] h-[380px]' isHoverable >
    <CardHeader
      className='pb-0 pt-2 px-4 flex-col items-start'
    >
      <h4 className='font-bold text-large'>{circuit.name}</h4>
      <p className='text-tiny uppercase font-bold text-primary'>{circuit.laps} laps</p>
      <small className='text-default-500 mt-4'>
        distance: {circuit.race_distance}
      </small>
    </CardHeader>
    <CardBody className='overflow-visible py-2 flex justify-center items-center' >
      <Image
        width={270}
        height={200}
        alt='formula one circuit'
        className='object-cover rounded-xl'
        src={circuit.image}
      />
    </CardBody>
  </Card>
);

