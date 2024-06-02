import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <section className={styles.portfolio}>
      <div className={`container ${styles.portfolioContainer}`}>
        <h1 className={styles.title}>Портфоліо</h1>
        <ul className={styles.galery}>
          {portfolio.map(({ id, services, img, title }) => {
            return img.map((value, index) => (
              <li key={index} className={styles.imgContainer}>
                <Image
                  src={value}
                  alt={title}
                  fill={true}
                  className={styles.img}
                  sizes="100%"
                />
              </li>
            ));
          })}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioPage;
