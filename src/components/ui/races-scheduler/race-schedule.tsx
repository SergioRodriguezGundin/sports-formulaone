import type { ScheduleInterface } from '../../../api/interfaces/schedule.interface';
import { setScheduleSelected } from '../../../store/schedule';
import styles from './race-schedule.module.css';

export const RaceSchedule = ({ raceSchedule, index }: { raceSchedule: ScheduleInterface, index: number }) => {
  return (
    <button
      id={`race-${index}`}
      className={styles.race}
      onClick={() => {
        setScheduleSelected(raceSchedule);
      }}
    >
      <h2 className='text-xl text-black'>{raceSchedule.title}</h2>
      <p className='text-sm text-primary'>{raceSchedule.place}</p>
    </button>
  )
}