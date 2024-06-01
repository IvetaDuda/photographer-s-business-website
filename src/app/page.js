import AboutMeHome from '@/components/AboutMeHome/AboutMeHome';
import Hero from '@/components/Hero/Hero';
import dynamic from 'next/dynamic';
// import styles from './page.module.css';

const HeroDynamic = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,

  loading: () => (
    <img src="/hero/kato-blackmore-3FIFNEBTW0A-unsplash.webp"></img>
  ),
});

export default function Home() {
  return (
    <>
      <HeroDynamic />
      <AboutMeHome />
    </>
  );
}
