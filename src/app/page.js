import dynamic from 'next/dynamic';
// import styles from './page.module.css';

const HeroDynamic = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,
  loading: () => (
    <img
      src="/hero/kato-blackmore-vMUAIcZhfoo-unsplash.webp"
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '100vw',
        maxHeight: '100vh',
        objectFit: 'cover',
      }}
      alt="Loading image"
    />
  ),
});

const DynamicAboutMeHome = dynamic(() =>
  import('@/components/AboutMeHome/AboutMeHome')
);

export default function Home() {
  return (
    <>
      <HeroDynamic />
      <DynamicAboutMeHome />
    </>
  );
}
