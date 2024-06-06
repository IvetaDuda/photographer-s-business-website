import BackToTop from '@/components/Buttons/BackToTop/BackToTop';
import Hero from '@/section/Hero/Hero';
import dynamic from 'next/dynamic';
// import styles from './page.module.css';

const DynamicAboutMeHome = dynamic(() =>
  import('@/section/AboutMeHome/AboutMeHome')
);

const DynamicPortfolioHome = dynamic(() =>
  import('@/section/PortfolioHome/PortfolioHome')
);

const DynamicContactHome = dynamic(() =>
  import('@/section/ContactHome/ContactHome')
);

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicAboutMeHome />
      <DynamicPortfolioHome />
      <DynamicContactHome />
      <BackToTop />
    </>
  );
}
