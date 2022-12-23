/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Footer, Tooltip } from "flowbite-react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

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
              <Footer.Title title='Our KSA Associate' />

              <Footer.LinkGroup col={true}>
                <p>Our agent in Saudi Arabia</p>
                <p>
                  MAZAG ©{" "}
                  <img
                    className='inline-block mx-2'
                    src='/assets/imgs/logo/ksa.png'
                    alt='LOGO'
                    width={50}
                  />
                </p>
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
                        const text = "+9660531342545";
                        if ("clipboard" in navigator) {
                          navigator.clipboard.writeText(text);
                        } else {
                          return document.execCommand("copy", true, text);
                        }
                      }}
                    >
                      Phone: +9660531342545
                    </button>
                  </Tooltip>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  target={"_blank"}
                  href='https://www.facebook.com/AlMorabba3.EG'
                  rel='noopener noreferrer'
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  target={"_blank"}
                  href='https://instagram.com/almorabba3.eg'
                  rel='noopener noreferrer'
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  target={"https://www.youtube.com/c/AlMorabba3MarketingAgency"}
                  rel='noopener noreferrer'
                  href='#'
                >
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
                        const text = "+201211301010";
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
                <Footer.Link>
                  <button
                    onClick={(e) => {
                      window.open("mailto:Almorabbaa@gmail.com");
                    }}
                  >
                    Almorabbaa@gmail.com
                  </button>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='Al Morabba3™' year={2023} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon
              href='https://www.facebook.com/AlMorabba3.EG'
              icon={BsFacebook}
            />
            <Footer.Icon
              href='https://instagram.com/almorabba3.eg'
              icon={BsInstagram}
            />
            <Footer.Icon
              href='https://www.youtube.com/c/AlMorabba3MarketingAgency'
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default WebFooter;