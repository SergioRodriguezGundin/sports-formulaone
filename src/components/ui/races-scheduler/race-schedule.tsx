import type { ScheduleInterface } from '../../../api/interfaces/schedule.interface'
import styles from './race-schedule.module.css'

export const RaceSchedule = ({ raceSchedule, index }: { raceSchedule: ScheduleInterface, index: number }) => {
  return (
    <button
      id={`race-${index}`}
      className={styles.race}
    >
      <h2 className='text-xl text-black'>{raceSchedule.title}</h2>
      <p className='text-sm text-primary'>{raceSchedule.place}</p>
    </button>
  )
}