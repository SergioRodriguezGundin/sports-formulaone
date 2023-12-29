import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';

export interface INews {
  title: string;
  image: string;
}

export const New = ({ f1_new }: { f1_new: INews }) => (
  <Card
    isFooterBlurred
    className='col-span-12 sm:col-span-6 h-[300px]'
  >
    <CardHeader className=' backdrop-blur-sm absolute z-10 bottom-0 flex-col items-start bg-background/80'>
      <p className='text-tiny text-primary uppercase font-bold'>
        F1 unlocked
      </p>
      <h4 className='text-color/90 font-medium text-ml mt-2'>{f1_new.title}</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt='Relaxing app background'
      className='z-0 w-full h-full object-cover'
      src={f1_new.image}
    />
  </Card>
)