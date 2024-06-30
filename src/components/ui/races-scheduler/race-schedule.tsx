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
      <img src={raceSchedule.hero_image} alt={raceSchedule.place + 'track'} className={styles.raceImage} />
      <div className="absolute">
        <p className='text-lg font-bold text-white'>{raceSchedule.place}</p>
        <span className='text-sm'>{raceSchedule.year}</span>
      </div>
    </button>
  )
}