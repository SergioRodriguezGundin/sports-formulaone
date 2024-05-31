import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';

export interface INews {
  title: string;
  image: string;
}

export const New = ({ f1_new, index }: { f1_new: INews; index: number }) => (
  <Card
    isFooterBlurred
    key={index}
    className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 h-[300px] ${index === 3 || index === 6 ? "col-span-2" : ""
      }`}
  >
    <CardHeader className=' backdrop-blur-sm absolute z-10 bottom-0 flex-col items-start bg-background/80'>
      <span className='text-primary text-sm font-bold uppercase'>
        F1 unlocked
      </span>
      <p className='text-color/90 font-normal text-xs mt-2'>{f1_new.title}</p>
    </CardHeader>
    <Image
      removeWrapper
      alt='Relaxing app background'
      className='z-0 w-full h-full object-cover'
      src={f1_new.image}
    />
  </Card>
)