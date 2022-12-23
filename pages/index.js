/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import LoadingScreen from "../components/loading screen/LoadingScreen";
import NavigationBar from "../components/layout/navbar";
import WebFooter from "../components/layout/footer";
import { Button, Carousel } from "flowbite-react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { typingAnimation, splashAnimation } from "../animations";

const getImgPaths = (cate, number) => {
  let paths = [];
  for (let i = 1; i <= number; i++) {
    paths.push(`/assets/imgs/slider/${cate} (${i}).jpg`);
  }
  return paths;
};

const getLogosPaths = () => {
  let paths = [];
  for (let i = 1; i <= 35; i++) {
    paths.push(`/assets/imgs/logos/${i}.png`);
  }
  return paths;
};

export default function Home() {
  useEffect(() => {
    Aos.init();
    splashAnimation().then(() => {
      typingAnimation();
    });
  });

  return (
    <>
      <Head>
        <title>شركة المربع للتسويق الشبكي</title>
        <meta name='description' content=' شركة المربع للتسويق الشبكي' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoadingScreen />
      <main className='flex flex-col items-center pt-5 '>
        <div className=' w-[90%] '>
          <NavigationBar />
        </div>
        <div className='sections-container w-full'>
          {/* Welcome Section */}
          <div className='welcome flex justify-center gap-2  items-center flex-col my-32 md:h-[250px] px-5'>
            <p className='text-2xl md:text-4xl font-bold'></p>
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
                  {getImgPaths("about", 3).map((path, index) => {
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={index}
                        src={path}
                        loading='lazy'
                        alt='slider img'
                      />
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
                  {getImgPaths("social", 16).map((path, index) => {
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={index}
                        src={path}
                        loading='lazy'
                        alt='slider img'
                      />
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
              <p className='text-xl md:text-3xl font-bold'>Media 🎬</p>
              <p className='text-base md:text-xl'>
                Take a look at our media production.
              </p>
            </div>
            <div data-aos='fade-right' className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
                <Carousel slideInterval={5000}>
                  {getImgPaths("media", 3).map((path, index) => {
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={index}
                        src={path}
                        loading='lazy'
                        alt='slider img'
                      />
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
                  {getImgPaths("brand", 6).map((path, index) => {
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={index}
                        src={path}
                        loading='lazy'
                        alt='slider img'
                      />
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
                  {getImgPaths("website", 5).map((path, index) => {
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={index}
                        src={path}
                        loading='lazy'
                        alt='slider img'
                      />
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          {/* clients section */}
          <div id='clients' className='section'>
            <div data-aos='fade-up' className='col-span-3 text-center mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>Our Clients 🏆</p>
              <p className='text-base md:text-xl'>
                We serve a discerning clientele
              </p>
            </div>
            {/* icons */}
            <div className='col-span-3 flex flex-wrap gap-5 justify-center items-center px-5 mt-5 '>
              {getLogosPaths().map((path, index) => {
                return (
                  <div
                    data-aos='zoom-in'
                    duration={(index + 1) * 200}
                    key={index}
                    className='logo-circle'
                  >
                    <img src={path} alt='client logo' />
                  </div>
                );
              })}
            </div>
            {/* End Section */}
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

        <div className='w-full'>
          <WebFooter />
        </div>
      </main>
    </>
  );
}
