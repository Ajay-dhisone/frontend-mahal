

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import React,{useEffect,useState} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax,ParallaxBanner,ParallaxBannerLayer,useParallax } from 'react-scroll-parallax';
import i1 from '../images/1.webp'
import i2 from '../images/2.webp'
import i3 from '../images/3.webp'
import i4 from '../images/4.webp'
import i5 from '../images/5.webp'
import i6 from '../images/6.webp'
import i7 from '../images/7.webp'
import i8 from '../images/8.webp'
import i9 from '../images/9.webp'
import i10 from '../images/10.webp'
import i11 from '../images/11.webp'
import i12 from '../images/12.webp'
import i13 from '../images/13.webp'
import i14 from '../images/14.webp'
import './home.css'
import { FaChevronCircleDown } from "react-icons/fa";
// gsap.registerPlugin(ScrollTrigger);



function Home() {


  // const [headingLeft, setHeadingLeft] = useState(100);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const newLeft = Math.max(100 - 0.2 * window.scrollY, 1) + 'vw';
  //     setHeadingLeft(newLeft);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup function to remove event listener on component unmount
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div>

    <ParallaxProvider>
{/* 1 */}

<ParallaxBanner style={{ aspectRatio: '16 / 7' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i1} speed={-10} />
  

    
  {/* <h3 style={{ left: headingLeft , color:"white"}}>Welcome to manikam mahal</h3> */}
  <div class="container">
    <span class="text1"> Welcome to Manikam mahal</span>
    <span style={{}}>
      <br/><FaChevronCircleDown />
    </span>
  </div>
    
  {/* </ParallaxBannerLayer> */}


</ParallaxBanner>

    
    {/* <ParallaxBanner
      layers={[{ image: i1},{ speed: -15,}]}
      style={{aspectRatio:"16/9",border:"1px solid #d4af37"}} 
    />
    <h2> Virtual tour of our Mahal</h2> */}

    <ParallaxBanner style={{ aspectRatio: '16 / 10' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i2} speed={-10} />
  <ParallaxBannerLayer>
    <h1 className='description'>Mahal Door</h1>
    
  </ParallaxBannerLayer>
</ParallaxBanner>

 <ParallaxBanner style={{ aspectRatio: '1/1' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i3} speed={-20} />
  <ParallaxBannerLayer>
    <h1 className='description'>interior</h1>
  </ParallaxBannerLayer>
</ParallaxBanner>

     <ParallaxBanner
      layers={[{ image: i4, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />

<ParallaxBanner
      layers={[{ image: i5, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />
    <ParallaxBanner
      layers={[{ image: i6, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />
    <ParallaxBanner style={{ aspectRatio: '1/1' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i7} speed={-20} />
  <ParallaxBannerLayer>
    <h1 className='description'>Marriage stage</h1>
    
  </ParallaxBannerLayer>
</ParallaxBanner>
    <ParallaxBanner style={{ aspectRatio: '1/1' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i8} speed={-20} />
  <ParallaxBannerLayer>
    <h1 className='description'>Rooms</h1>
    
  </ParallaxBannerLayer>
</ParallaxBanner>
    <ParallaxBanner
      layers={[{ image: i9, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />
    <ParallaxBanner
      layers={[{ image: i10, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />
    <ParallaxBanner
      layers={[{ image: i11, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />
     <ParallaxBanner style={{ aspectRatio: '1/1' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i12} speed={-20} />
  <ParallaxBannerLayer>
    <h1 className='description'>Dining</h1>
    
  </ParallaxBannerLayer>
</ParallaxBanner>
    <ParallaxBanner
      layers={[{ image: i13, speed: -15 }]}
      style={{aspectRatio:"1/1",border:"1px solid #d4af37"}}
    />
    <ParallaxBanner style={{ aspectRatio: '1/1' ,border:"1px solid #d4af37"}}>
  <ParallaxBannerLayer image={i14} speed={-20} />
  <ParallaxBannerLayer>
    <h1 className='description'>Kitchen</h1>
    
  </ParallaxBannerLayer>
</ParallaxBanner>
    
    </ParallaxProvider>
    </div>
  )
}

export default Home;
