import { Tabs, Tab } from "@nextui-org/react";
import { DriversLeaderboardList } from '../ui/lists/drivers-leaderboard/drivers-leaderboard-list';

const componentsMap = {
  'DriversLeaderboardList': <DriversLeaderboardList />,
  // 'TeamsLeaderboardList': <TeamsLeaderboardList />,
};

export default function F1Tabs({ tabs }: { tabs: { title: string, key: string; component: string }[] }) {
  const variant = 'bordered';
  console.log(tabs)


  return (
    <div className="flex flex-wrap gap-4">
      <Tabs variant={variant} aria-label="Tabs variants">
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            <div>hola</div>
            {componentsMap[tab.component as keyof typeof componentsMap]}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}