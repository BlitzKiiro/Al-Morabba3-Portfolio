import Head from "next/head";
import LoadingScreen from "../components/loading screen/LoadingScreen";
import NavigationBar from "../components/layout/navbar";
import WebFooter from "../components/layout/footer";
import { Button, Carousel } from "flowbite-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  lazyLoad: "progressive",
  dots: false,
  autoplaySpeed: 2000,
  speed: 1000,
};

const getImgPaths = (cate, number) => {
  let paths = [];
  for (let i = 1; i <= number; i++) {
    paths.push(`/assets/imgs/slider/${cate} (${i}).jpg`);
  }
  return paths;
};

export default function Home() {
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
        <div className='w-[90%] '>
          {/* Welcome Section */}
          <div className='flex justify-center gap-2  items-center flex-col my-32 md:h-[250px]'>
            <p className='text-2xl md:text-4xl font-bold'>
              Welcome to Al Morabba3 👋
            </p>
            <p className='text-base md:text-xl'>
              {" "}
              Take a tour around our website
            </p>
            <Button className='my-3' gradientDuoTone='purpleToBlue'>
              Get Started
            </Button>
          </div>
          {/* About us section */}
          <div
            id='about'
            className='grid grid-cols-3 flex justify-center items-center my-32 md:my-40'
          >
            <div className='col-span-3 md:col-span-1 text-center  mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>
                What is Al Morabba3 ?
              </p>
              <p className='text-base md:text-xl'>What we can offer you.</p>
            </div>
            <div className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
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
          <div
            id='social'
            className='grid grid-cols-3 flex justify-center items-center my-32 md:my-40'
          >
            <div className='col-span-3 md:order-last md:col-span-1 text-center  mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>Social Media 🤳</p>
              <p className='text-base md:text-xl'>Our social media designs</p>
            </div>
            <div className='col-span-3 md:col-span-2 '>
              <div className='h-[180px] md:h-[480px]'>
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
          <div
            id='media'
            className='grid grid-cols-3 flex justify-center items-center my-32 md:my-40'
          >
            <div className='col-span-3 md:col-span-1 text-center  mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>Media 🎬</p>
              <p className='text-base md:text-xl'>
                Take a look at our media production.
              </p>
            </div>
            <div className='col-span-3 md:col-span-2 '>
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
          <div
            id='brand'
            className='grid grid-cols-3 flex justify-center items-center my-32 md:my-40'
          >
            <div className='col-span-3 md:order-last md:col-span-1 text-center  mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>Brand 🌟</p>
              <p className='text-base md:text-xl'>Your genuine idendtity</p>
            </div>
            <div className='col-span-3 md:col-span-2 '>
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
          <div
            id='web'
            className='grid grid-cols-3 flex justify-center items-center my-32 md:my-40'
          >
            <div className='col-span-3 md:col-span-1 text-center  mb-8 '>
              <p className='text-xl md:text-3xl font-bold'>Web Design 🧑‍💻 </p>
              <p className='text-base md:text-xl'>Development, design & SEO</p>
            </div>
            <div className='col-span-3 md:col-span-2 '>
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
        </div>

        <div className=' w-[90%] '>
          <WebFooter />
        </div>
      </main>
    </>
  );
}
