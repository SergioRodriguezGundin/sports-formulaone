
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { FormulaOneLogo } from './formulaOneLogo/formulaOneLogo';
import { DarkLightSwitch } from './darkMode/darkLightSwitch';

export const NavBarFormulaOne = () => (
  <Navbar>
    <NavbarBrand>
      <FormulaOneLogo />
    </NavbarBrand>
    <NavbarContent className='hidden sm:flex gap-4' justify='center'>
      <NavbarItem>
        <Link color='foreground' href='drivers'>Drivers</Link>
      </NavbarItem>
      <NavbarItem>
        <Link color='foreground' href='constructors'>Constructors</Link>
      </NavbarItem>
      <NavbarItem>
        <Link color='foreground' href='circuits'>Circuits</Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify='end'>
      <NavbarItem className='lg:flex'>
        <DarkLightSwitch />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);
