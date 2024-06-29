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
      <div className={styles.scheduleSelected}>
        <h1 className='text-xl text-white'>{scheduleSelected?.title}</h1>
        <p className='text-white'>{scheduleSelected?.place}</p>
        <p className='text-white'>{scheduleSelected?.date}</p>
        <p className='text-white'>{scheduleSelected?.month}</p>
        <span className={styles.heroImageContainer}>
          <img src={scheduleSelected?.hero_image} alt={scheduleSelected?.title} className={styles.heroImage} />
        </span>
      </div>

      <div className={styles.scrollcontainer}>
        {schedule.map((scheduleItem: ScheduleInterface, index: number) => (
          <RaceSchedule raceSchedule={scheduleItem} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

