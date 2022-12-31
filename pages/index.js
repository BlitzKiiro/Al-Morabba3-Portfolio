/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Button, Carousel } from "flowbite-react";
import AnimatedBg from "../components/svg/animatedbg";

export async function getServerSideProps(context) {
  const imgsPaths = await (
    await fetch(`${process.env.BASEURL}/api/imgs`)
  ).json();

  const youtubeList = [
    "https://www.youtube.com/embed/N0APu6p6dYs",
    "https://www.youtube.com/embed/XUyv1lABJVE",
    "https://www.youtube.com/embed/aIZcen-S7M0",
    "https://www.youtube.com/embed/zFMwVJdbbGU",
    "https://www.youtube.com/embed/jlDeWXC4eu4",
  ];

  return {
    props: { imgsPaths, youtubeList },
  };
}

const placeholder =
  "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function Home({ imgsPaths, youtubeList }) {
  return (
    <>
      <Head>
        <title> AlMorabbaa Marketing Agency</title>
        <meta name='description' content='almorabbaa marketing agency' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center pt-5 '>
        <div className='sections-container w-full'>
          {/* Welcome Section */}
          <div className='welcome relative flex justify-center gap-2  items-center flex-col h-[60vh] md:h-[90vh] px-5'>
            <h1 className='ml6'>
              <span className='text-wrapper text-2xl md:text-4xl font-bold'>
                <span className='letters'>Welcome to Al Morabba3</span>
                <span className='wave opacity-0'> 👋 </span>
              </span>
            </h1>
            <p className='text-base md:text-xl'>
              {" "}
              Take a tour around our website
            </p>
            <Button
              onClick={() => {
                smoothScroll("#about", 300, "easeInOutCirc");
              }}
              className='my-3'
              gradientDuoTone='purpleToBlue'
            >
              Get Started
            </Button>
            <AnimatedBg className='absolute w-full bottom-0 md:-bottom-32 -z-10 dark:fill-slate-800 fill-gray-300' />
          </div>
          {/* About us section */}
          <div id='about' className='bg-section'>
            <div
              data-aos='fade-left'
              className='col-span-3 md:col-span-1 text-center  mb-8 '
            >
              <p className='text-xl md:text-3xl font-bold'>
                What is Al Morabba3 ?
              </p>
              <p className='text-base md:text-xl'>What we can offer you.</p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px] '>
                <Carousel slideInterval={5000}>
                  {imgsPaths.about.map((path, index) => {
                    return (
                      <div className='w-full h-full relative' key={index}>
                        <img
                          alt='almorabba3 digital marketing services'
                          src={path}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          {/* Social section */}
          <div id='social' className='section'>
            <div
              data-aos='fade-left'
              className='col-span-3 md:order-last md:col-span-1 text-center  mb-8 '
            >
              <p className='text-xl md:text-3xl font-bold'>Social Media 🤳</p>
              <p className='text-base md:text-xl'>Our social media designs</p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]  overflow-hidden'>
                <Carousel slideInterval={5000}>
                  {imgsPaths.social.map((path, index) => {
                    return (
                      <div className='w-full h-full relative' key={index}>
                        <img
                          alt='almorabba3 social marketing'
                          src={path}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          {/* media section */}
          <div id='media' className='bg-section'>
            <div
              data-aos='fade-left'
              className='col-span-3 md:col-span-1 text-center  mb-8 '
            >
              <p className='text-xl md:text-3xl font-bold'>
                Media production 🎬
              </p>
              <p className='text-sm opacity-70 mb-3'> ( videos ) </p>
              <p className='text-base md:text-xl'>
                Creating Valuable Moments, we Create, You inspire.
              </p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
                <Carousel slide={false}>
                  {youtubeList.map((url, index) => {
                    return (
                      <iframe
                        key={index}
                        className='h-full w-full'
                        src={url}
                        title='YouTube video player'
                        frameBorder='0'
                        allowFullScreen
                      ></iframe>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          {/* photography section */}
          <div id='photography' className='section'>
            <div
              data-aos='fade-left'
              className='col-span-3 md:order-last  md:col-span-1 text-center  mb-8 '
            >
              <p className='text-xl md:text-3xl font-bold mb-3'>
                Photography Studio 📷{" "}
              </p>
              <p className='text-base md:text-xl'>
                Exceptional images deserve an exceptional presentation.
              </p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
                <Carousel slideInterval={5000}>
                  {imgsPaths.photography.map((path, index) => {
                    return (
                      <div className='w-full h-full relative' key={index}>
                        <img
                          alt='almorabba3 photgraphy services'
                          src={path}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          {/* web section */}
          <div id='web' className='bg-section'>
            <div
              data-aos='fade-left'
              className='col-span-3 md:col-span-1 text-center  mb-8 '
            >
              <p className='text-xl md:text-3xl font-bold'>Web Design 🧑‍💻 </p>
              <p className='text-base md:text-xl'>Development, design & SEO</p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
                <Carousel slideInterval={5000}>
                  {imgsPaths.web.map((path, index) => {
                    return (
                      <div className='w-full h-full' key={index}>
                        <img
                          alt='almorabba3 web design and seo services'
                          src={path}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          {/* Brand section */}
          <div id='brand' className='section'>
            <div
              data-aos='fade-left'
              className='col-span-3 md:order-last md:col-span-1 text-center  mb-8 '
            >
              <p className='text-xl md:text-3xl font-bold'>Brand 🌟</p>
              <p className='text-base md:text-xl'>Your genuine idendtity</p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
                <Carousel slideInterval={5000}>
                  {imgsPaths.brand.map((path, index) => {
                    return (
                      <div className='w-full h-full relative' key={index}>
                        <img
                          alt='almorabba3 branding services'
                          src={path}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>

          {/* clients section */}
          <div
            id='clients'
            className='grid grid-cols-3 justify-center items-center py-20 p-5  dark:bg-slate-800 dark:text-white bg-gray-300 text-slate-700'
          >
            <div data-aos='fade-up' className='col-span-3 text-center mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>Our Clients 🏆</p>
              <p className='text-base md:text-xl'>
                We serve a discerning clientele
              </p>
            </div>
            {/* icons */}
            <div className='col-span-3 flex flex-wrap gap-5 justify-center items-center px-5 mt-5 '>
              {imgsPaths.clientsLogos.map((path, index) => {
                return (
                  <div
                    data-aos='zoom-in'
                    duration={(index + 1) * 200}
                    key={index}
                    className='logo-circle relative'
                  >
                    <img
                      fill
                      src={path}
                      alt='client logo'
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* End Section */}
          <div className='section'>
            <div
              data-aos='fade-down'
              className='col-span-3 flex justify-center gap-2  items-center flex-col mt-10 md:h-[250px] px-5'
            >
              <p className='text-2xl md:text-4xl font-bold'>Choose Us 🤝</p>
              <p className='text-base md:text-xl'>
                We gurantee you the best service.
              </p>
              <Button
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/messages/t/AlMorabba3.EG/",
                    "_blank"
                  );
                }}
                className='my-3'
                gradientDuoTone='cyanToBlue'
              >
                Request our service
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
