export interface TeamsColorsInterface {
  team: string;
  color: string;
  gradient: string;
}

export const teamColors: TeamsColorsInterface[] = [
  { team: "Ferrari", color: "hsl(0deg 100% 43.14%)", gradient: "linear-gradient(to right, transparent, hsl(0deg 100% 43.14%))" },
  { team: "Red Bull Racing Honda RBPT", color: "hsl(215.42deg 57.14% 49.41%)", gradient: "linear-gradient(to right, transparent, hsl(215.42deg 57.14% 49.41%))" },
  { team: "Mercedes", color: "hsl(180deg 100% 37.25%)", gradient: "linear-gradient(to right, transparent, hsl(180deg 100% 37.25%))" },
  { team: "McLaren Mercedes", color: "hsl(30.12deg 100% 50%)", gradient: "linear-gradient(to right, transparent, hsl(30.12deg 100% 50%))" },
  { team: "Alpine Renault", color: "hsl(196.76deg 100% 40%)", gradient: "linear-gradient(to right, transparent, hsl(196.76deg 100% 40%))" },
  { team: "RB Honda RBPT", color: "hsl(222.75deg 100% 70%)", gradient: "linear-gradient(to right, transparent, hsl(222.75deg 100% 70%))" },
  { team: "Aston Martin Aramco Mercedes", color: "hsl(159.83deg 63.64% 36.67%)", gradient: "linear-gradient(to right, transparent, hsl(159.83deg 63.64% 36.67%))" },
  { team: "Williams Mercedes", color: "hsl(202.84deg 100% 69.61%)", gradient: "linear-gradient(to right, transparent, hsl(202.84deg 100% 69.61%))" },
  { team: "Kick Sauber Ferrari", color: "hsl(120deg 71.29% 60.39%)", gradient: "linear-gradient(to right, transparent, hsl(120deg 71.29% 60.39%))" },
  { team: "Haas Ferrari", color: "hsl(205.71deg 5.04% 72.75%)", gradient: "linear-gradient(to right, transparent, hsl(205.71deg 5.04% 72.75%))" }
];

export const defaultTeamColor = {
  team: "",
  color: "hsl(220deg 2.89% 65.94%)",
  gradient: "linear-gradient(to right, transparent, hsl(220deg 2.89% 65.94%))"
};