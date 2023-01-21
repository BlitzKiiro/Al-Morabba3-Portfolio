import { Navbar, Dropdown } from "flowbite-react";
import { BsSunFill, BsMoonFill, BsLaptopFill } from "react-icons/bs";
import useThemeContext from "../../hooks/useThemeContext";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const { theme, dispatch } = useThemeContext();
  const { t } = useTranslation();

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
    <div className='pt-5 flex justify-center'>
      <Navbar className='w-[95%] md:w-[90%]' fluid={true} rounded={true}>
        <Navbar.Brand href='/'>
          <div className='mr-3 h-6 w-6 md:h-9 md:w-9 relative'>
            <Image
              alt='almorabba3 logo'
              src={"/assets/imgs/logo/icon logo.png"}
              fill
              sizes='50px'
            />
          </div>

          <span
            className='self-center whitespace-nowrap text-xl font-semibold dark:text-white 
          rtl:mr-1'
          >
            {t("Al Morabba3")}
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Dropdown label={<ThemeIcon />} arrowIcon={false} color={"gray"}>
            <Dropdown.Item
              onClick={() => {
                dispatch({ type: "LIGHT" });
              }}
              icon={BsSunFill}
              className=' rtl:gap-2'
            >
              {t("Light")}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch({ type: "DARK" });
              }}
              icon={BsMoonFill}
              className=' rtl:gap-2'
            >
              {t("Dark")}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch({ type: "SYSTEM" });
              }}
              icon={BsLaptopFill}
              className=' rtl:gap-2'
            >
              {t("System")}
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className='md:rtl:ml-7'
            onClick={() => {
              smoothScroll("#about", 300, "easeInOutCirc");
            }}
            href='#about'
            active={true}
          >
            {t("About US")}
          </Navbar.Link>
          <Navbar.Link
            href='#social'
            onClick={() => {
              smoothScroll("#social", 600, "easeInOutCirc");
            }}
          >
            {t("Social Designs")}
          </Navbar.Link>
          <Navbar.Link
            href='#media'
            onClick={() => {
              smoothScroll("#media", 900, "easeInOutCirc");
            }}
          >
            {t("Media production")}
          </Navbar.Link>
          <Navbar.Link
            href='#brand'
            onClick={() => {
              smoothScroll("#brand", 1200, "easeInOutCirc");
            }}
          >
            {t("Brand Identity")}
          </Navbar.Link>
          <Navbar.Link
            href='#web'
            onClick={() => {
              smoothScroll("#web", 1500, "easeInOutCirc");
            }}
          >
            {t("Web Design")}
          </Navbar.Link>
          <Navbar.Link
            href='#photography'
            onClick={() => {
              smoothScroll("#photography", 1800, "easeInOutCirc");
            }}
          >
            {t("Photography")}
          </Navbar.Link>
          <Navbar.Link
            href='#clients'
            onClick={() => {
              smoothScroll("#clients", 2100, "easeInOutCirc");
            }}
          >
            {t("Our Clients")}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
