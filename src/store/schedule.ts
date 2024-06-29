import { atom } from 'nanostores';
import type { ScheduleInterface } from '../api/interfaces/schedule.interface';

const $scheduleSelected = atom<ScheduleInterface | null>(null);

export const setScheduleSelected = (schedule: ScheduleInterface) => {
  $scheduleSelected.set(schedule);
};

export default $scheduleSelected;