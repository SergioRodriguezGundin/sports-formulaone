import type { ScheduleInterface } from '../../../api/interfaces/schedule.interface';
import { RaceSchedule } from './race-schedule';
import styles from './races-schedule.module.css';

export default function RacesSchedule({ schedule }: { schedule: ScheduleInterface[] }) {
  return (
    <section className={styles.schedule}>
      <div className={styles.scheduleSelected}>
        <h1 className='text-2xl text-white'>{schedule[0].title}</h1>
      </div>

      <div className={styles.scrollcontainer}>
        {schedule.map((scheduleItem: ScheduleInterface, index: number) => (
          <RaceSchedule raceSchedule={scheduleItem} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

