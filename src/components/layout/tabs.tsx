import { Tabs, Tab, ScrollShadow } from "@nextui-org/react";
import { DriversLeaderboardList } from '../ui/lists/drivers-leaderboard/drivers-leaderboard-list';
import { TeamsLeaderboardList } from '../ui/lists/teams-leaderboard/teams-leaderboard-list';

const componentsMap = {
  'DriversLeaderboardList': DriversLeaderboardList,
  'TeamsLeaderboardList': TeamsLeaderboardList,
};

export default function F1Tabs({ tabs }: { tabs: { title: string, key: string; component: string, props: any }[] }) {
  const variant = 'bordered';

  return (
    <div className='flex w-full flex-col'>
      <Tabs variant={variant} aria-label="Tabs variants">
        {tabs.map((tab) => {
          const Component = componentsMap[tab.component as keyof typeof componentsMap];
          return (
            <Tab key={tab.key} title={tab.title}>
              <ScrollShadow className="h-[650px]">
                <Component {...tab.props} />
              </ScrollShadow>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}