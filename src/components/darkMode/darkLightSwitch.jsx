import React from "react";

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";

export const DarkLightSwitch = () => {
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <Switch
      defaultSelected
      size="md"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={() => setIsSelected(!isSelected)}
    >
    </Switch>
  );
}

