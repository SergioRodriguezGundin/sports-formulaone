import { Card, CardBody, Chip, Divider, Image } from '@nextui-org/react';
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
        className="border-none bg-background/3 w-[100%] max-h-[420px]"
        shadow="sm"
      >
        <CardBody>
          <div className="flex flex-row gap-4 justify-between items-center h-[100%]">
            <div className="flex flex-col h-[100%]">
              <div className='flex flex-row gap-2 items-center justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                  <Chip color="default">{scheduleSelected?.date} {scheduleSelected?.month}</Chip>
                </div>
                <Chip color="primary">{scheduleSelected?.round}</Chip>
              </div>
              <Divider className="my-4" />
              <div className='flex flex-row gap-2 items-center'>
                <Image
                  alt={scheduleSelected?.id}
                  className="object-cover bg-foreground/20"
                  height={30}
                  width={40}
                  shadow="md"
                  src={scheduleSelected?.country_flag}
                />
                <h3 className="text-primary text-xl font-bold uppercase">{scheduleSelected?.place}</h3>
              </div>
              <h4 className="text-sm mt-2">{scheduleSelected?.title}</h4>
              <Divider className="my-4" />
              <Image
                alt={scheduleSelected?.id}
                className="bg-foreground/10"
                height={200}
                width={260}
                src={scheduleSelected?.track_image}
              />
            </div>
            <div className="flex flex-col h-[100%]">
              <img src={scheduleSelected?.hero_image} alt="f1 track cover" className={styles.heroImage} />
            </div>
          </div>
        </CardBody>
      </Card>

      <div className={styles.scrollcontainer}>
        {schedule.map((scheduleItem: ScheduleInterface, index: number) => (
          <RaceSchedule raceSchedule={scheduleItem} index={index} key={index} />
        ))}
      </div>
    </section>
  )
};

