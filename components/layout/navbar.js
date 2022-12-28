/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Navbar, Dropdown } from "flowbite-react";
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
        <Navbar.Link
          onClick={() => {
            smoothScroll("#about", 300, "easeInOutCirc");
          }}
          href='#about'
          active={true}
        >
          About US
        </Navbar.Link>
        <Navbar.Link
          href='#social'
          onClick={() => {
            smoothScroll("#social", 600, "easeInOutCirc");
          }}
        >
          Social Designs
        </Navbar.Link>
        <Navbar.Link
          href='#media'
          onClick={() => {
            smoothScroll("#media", 900, "easeInOutCirc");
          }}
        >
          Media Production
        </Navbar.Link>
        <Navbar.Link
          href='#brand'
          onClick={() => {
            smoothScroll("#brand", 1200, "easeInOutCirc");
          }}
        >
          Brand Identity
        </Navbar.Link>
        <Navbar.Link
          href='#web'
          onClick={() => {
            smoothScroll("#web", 1500, "easeInOutCirc");
          }}
        >
          Web Design
        </Navbar.Link>
        <Navbar.Link
          href='#photography'
          onClick={() => {
            smoothScroll("#photography", 1800, "easeInOutCirc");
          }}
        >
          Photography
        </Navbar.Link>
        <Navbar.Link
          href='#clients'
          onClick={() => {
            smoothScroll("#clients", 2100, "easeInOutCirc");
          }}
        >
          Our Clients
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
