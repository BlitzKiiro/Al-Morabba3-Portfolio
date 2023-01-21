/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Footer, Tooltip } from "flowbite-react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const WebFooter = () => {
  const { t } = useTranslation();

  return (
    <Footer container={true}>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='mb-5'>
            <Footer.Brand
              href='#'
              src='/assets/imgs/logo/icon logo.png'
              alt='LOGO'
              name={t("AL MORABBA3")}
            />
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title={t("Our KSA Associate")} />

              <Footer.LinkGroup col={true}>
                <p>{t("Our agent in Saudi Arabia")}</p>
                <p>
                  نظم مارس ©{" "}
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
                      {t("Phone: +9660531342545")}
                    </button>
                  </Tooltip>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t("Follow us")} />
              <Footer.LinkGroup col={true}>
                <a
                  target={"_blank"}
                  href='https://www.facebook.com/AlMorabba3.EG'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t("Facebook")}
                </a>
                <a
                  target={"_blank"}
                  href='https://instagram.com/almorabba3.eg'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t("Instagram")}
                </a>
                <a
                  target={"_blank"}
                  rel='noopener noreferrer'
                  className='hover:underline'
                  href='https://www.youtube.com/c/AlMorabba3MarketingAgency'
                >
                  {t("YouTube")}
                </a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t("Contact Us")} />
              <Footer.LinkGroup col={true}>
                <Footer.Link className='rtl:mr-0'>
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
          <Footer.Copyright href='#' by={t("Al Morabba3™")} year={2023} />
          <div
            dir='ltr'
            className='mt-4  flex space-x-6 sm:mt-0  sm:justify-center'
          >
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
