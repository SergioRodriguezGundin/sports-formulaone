import { atom } from 'nanostores';

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";

export type darkLightSwitchValue = 'dark' | 'light';

export const $darkLightState = atom<darkLightSwitchValue>('dark');

export const DarkLightSwitch = () => {
  return (
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
}

