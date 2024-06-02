import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import { portfolio } from '@/data/portfolio';
import styles from './PortfolioHome.module.scss';

const PortfolioHome = () => {
  return (
    <section className={styles.portfolio}>
      <div className={`container`}>
        <h2 className={styles.title}>Портфоліо</h2>
        <ul className={styles.portfolioList}>
          {portfolio.map(({ id, title, services, img }) => (
            <li
              key={id}
              className={styles.portfolioItem}
              style={{ backgroundImage: `url(${img[0]})` }}
            >
              <div className={styles.portfolioContent}>
                <h3 className={styles.titleContent}>{title}</h3>
                <ul className={styles.servicesList}>
                  {services.map((value, index) => (
                    <li key={index}>&#9679; {value}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li className={styles.buttonItem}>
            <ButtonLink title="Переглянути Портфоліо" href="/portfolio" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PortfolioHome;
