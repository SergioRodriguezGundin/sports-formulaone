import { Card, CardHeader, Chip, Divider, Image } from '@nextui-org/react';
import { useState } from 'react';
import type { ScheduleInterface } from '../../../api/interfaces/schedule.interface';
import $scheduleSelected from '../../../store/schedule';
import { RaceSchedule } from './race-schedule';
import styles from './races-schedule.module.css';

export default function RacesSchedule({ schedule }: { schedule: ScheduleInterface[] }) {
  const [scheduleSelected, setScheduleSelected] = useState<ScheduleInterface | null>(schedule[0]);

  $scheduleSelected.listen((schedule) => {
    setScheduleSelected(schedule);
  });

  return (
    <section className={styles.schedule}>
      <Card
        className="border-none bg-background/60 dark:bg-default-100/50 w-[100%] max-h-[420px]"
        shadow="sm"
      >
        <CardHeader className="flex flex-col absolute z-10 bg-background/60 w-[100%] h-[100%]">
          <div className="flex flex-row justify-between gap-4 bg-background/60 p-4 rounded-xl w-[800px]">
            <div className="flex flex-col">
              <Image
                alt={scheduleSelected?.title}
                className="object-cover bg-foreground/20"
                height={200}
                shadow="md"
                src={scheduleSelected?.track_image}
                width="100%"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className='flex flex-row gap-2 items-center justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                  <Chip color="default">{scheduleSelected?.date} {scheduleSelected?.month}</Chip>
                </div>
                <Chip color="primary">{scheduleSelected?.round}</Chip>
              </div>
              <Divider className="my-2" />
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  alt={scheduleSelected?.id}
                  className="object-cover bg-foreground/20"
                  height={30}
                  width={40}
                  shadow="md"
                  src={scheduleSelected?.country_flag}
                />
                <p className="text-primary text-sm font-bold uppercase">{scheduleSelected?.place}</p>
              </div>
              <h4 className="text-white">{scheduleSelected?.title}</h4>
            </div>
          </div>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={scheduleSelected?.hero_image}
          style={{ filter: 'blur(3px) brightness(0.6)' }}
        />
      </Card>

      <div className={styles.scrollcontainer}>
        {schedule.map((scheduleItem: ScheduleInterface, index: number) => (
          <RaceSchedule raceSchedule={scheduleItem} index={index} key={index} />
        ))}
      </div>
    </section>
  )
};

