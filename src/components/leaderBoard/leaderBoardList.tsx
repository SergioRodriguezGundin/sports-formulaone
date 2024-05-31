import { Avatar, Card, CardBody, ScrollShadow, Tab, Tabs, Image } from '@nextui-org/react';

export const LeaderBoardList = (props: any) => {
  const { boards } = props || {};

  return (
    <div className="flex flex-col">
      <Tabs aria-label="Options">
        <Tab key="drivers" title="Drivers">
          <ScrollShadow className="h-[400px]" hideScrollBar={true}>
            {
              boards?.drivers?.map((driver: any, index: number) => (
                <Card key={driver.driver.id} className='flex flex-row justify-start align-center gap-2 mb-2'>
                  <CardBody className="flex flex-row justify-start align-center gap-4">
                    <Avatar isBordered radius="full" size="md" src={driver.driver.image} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">{driver.driver.name}</h4>
                      <h5 className="text-small tracking-tight text-default-400">{driver.points} points</h5>
                    </div>
                  </CardBody>
                </Card>
              ))
            }
          </ScrollShadow>

        </Tab>
        <Tab key="teams" title="Teams">
          <ScrollShadow className="h-[400px]" hideScrollBar={true}>
            {
              boards?.teams?.map((team: any, index: number) => (
                <Card key={team.id} className='flex flex-row justify-start align-center gap-2 mb-2'>
                  <CardBody className="flex flex-row justify-start align-center gap-4">
                    <h5 className="text-small font-semibold leading-none text-default-600 flex justify-center">{team.position}</h5>
                    <div className='team-logo bg-foreground/40 p-2 rounded-lg'>
                      <Image
                        width={80}
                        height={450}
                        alt={team.team.name}
                        src={team.team.logo}
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">{team.team.name}</h4>
                      <h5 className="text-small tracking-tight text-default-400">{team.points} points</h5>
                    </div>
                  </CardBody>
                </Card>
              ))
            }
          </ScrollShadow>
        </Tab>
      </Tabs>
    </div>
  )

};