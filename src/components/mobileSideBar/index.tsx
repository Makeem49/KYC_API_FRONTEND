import { NavLink } from 'react-router-dom';

import { Burger, Container, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { menu } from '../../context/routes';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const activeStyle =
    'bg-sinbadKYC-normalGrey text-white font-semibold shadow rounded-3xl flex items-center gap-1 w-[80%] p-2';
  const baseStyle =
    'text-sinbadKYC-lightGrey font-semibold flex items-center gap-1 w-[80%] p-2';
  return (
    <>
      <Burger opened={opened} onClick={toggle} aria-label={label} />

      {opened && (
        <Drawer opened={opened} onClose={toggle} position="left" size={140}>
          <Container className=" bg-white dark:bg-afexdark-darkest">
            <div className=" relative flex flex-col items-center w-full h-[100vh] text-gray-400  dark:bg-afexdark-darkest rounded">
              {/* Dashboard Icons */}

              <div className=" w-full gap-2 justify-between items-center flex flex-col">
                {menu?.map((route, index) => {
                  return (
                    <NavLink
                      key={index}
                      onClick={toggle}
                      to={route.path ?? ''}
                      className={({ isActive }) =>
                        isActive ? activeStyle : baseStyle
                      }
                      end>
                      {route.icon}
                      <span className=" text-[10px]"> {route.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </Container>
        </Drawer>
      )}
    </>
  );
}
export default Demo;
