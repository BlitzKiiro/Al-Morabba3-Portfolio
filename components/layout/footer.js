import { Footer, Tooltip } from "flowbite-react";
import {
  BsFacebook,
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const WebFooter = () => {
  return (
    <Footer container={true}>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='mb-5'>
            <Footer.Brand
              href='#'
              src='/assets/imgs/logo/icon logo.png'
              alt='LOGO'
              name='AL MORABBA3'
            />
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  target={"_blank"}
                  href='https://www.facebook.com/AlMorabba3.EG'
                >
                  Facebook
                </Footer.Link>
                <Footer.Link target={"_blank"} href='#'>
                  Twitter
                </Footer.Link>
                <Footer.Link target={"_blank"} href='#'>
                  Instagram
                </Footer.Link>
                <Footer.Link target={"_blank"} href='#'>
                  YouTube
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Contact Us' />
              <Footer.LinkGroup col={true}>
                <Footer.Link>
                  <Tooltip
                    trigger='click'
                    animation='duration-500'
                    placement='top'
                    content='Copied'
                    style='dark'
                  >
                    <button
                      onClick={(e) => {
                        const text = " +201211301010";
                        if ("clipboard" in navigator) {
                          navigator.clipboard.writeText(text);
                        } else {
                          return document.execCommand("copy", true, text);
                        }
                      }}
                    >
                      +2012 11 30 10 10
                    </button>
                  </Tooltip>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='Al Morabba3™' year={2022} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default WebFooter;
