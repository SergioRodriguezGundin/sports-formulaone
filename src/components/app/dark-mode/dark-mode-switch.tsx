import { atom } from 'nanostores';

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./moon-icon";
import { SunIcon } from "./sun-icon";

export type darkLightSwitchValue = 'dark' | 'light';

export const $darkLightState = atom<darkLightSwitchValue>('dark');

export const DarkModeSwitch = () => (
  <Switch
    defaultSelected
    size="md"
    color="primary"
    thumbIcon={({ isSelected, className }) =>
      isSelected ? (
        <MoonIcon className={className} />
      ) : (
        <SunIcon className={className} />
      )
    }
    onValueChange={(value) => {
      $darkLightState.set(value ? 'dark' : 'light');
    }}
  >
  </Switch>
);

