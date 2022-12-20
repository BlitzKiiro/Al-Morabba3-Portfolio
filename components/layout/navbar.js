/* eslint-disable react/jsx-no-comment-textnodes */
import { Navbar, Button } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { BsSunFill, BsMoonFill, BsLaptopFill } from "react-icons/bs";
import useThemeContext from "../../hooks/useThemeContext";

const NavigationBar = () => {
  const { theme, dispatch } = useThemeContext();
  const ThemeIcon = () => {
    switch (theme.mode) {
      case "light":
        return <BsSunFill className='w-4 h-4' />;
      case "dark":
        return <BsMoonFill className='w-4 h-4' />;
      default:
        return <BsLaptopFill className='w-4 h-4' />;
    }
  };
  return (
    <Navbar fluid={true} rounded={true} color='dark'>
      <Navbar.Brand href='/'>
        <img
          src='assets/imgs/logo/icon logo.png'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Al Morabba3
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Dropdown label={<ThemeIcon />} arrowIcon={false} color={"gray"}>
          <Dropdown.Item
            onClick={() => {
              dispatch({ type: "LIGHT" });
            }}
            icon={BsSunFill}
          >
            Light{" "}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch({ type: "DARK" });
            }}
            icon={BsMoonFill}
          >
            Dark
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch({ type: "SYSTEM" });
            }}
            icon={BsLaptopFill}
          >
            System
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='#' active={true}>
          About US
        </Navbar.Link>
        <Navbar.Link href='#'>Social Designs</Navbar.Link>
        <Navbar.Link href='#'>Media Production</Navbar.Link>
        <Navbar.Link href='#'>Brand Identity</Navbar.Link>
        <Navbar.Link href='#'>Web Design</Navbar.Link>
        <Navbar.Link href='#'>Our Clients</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
