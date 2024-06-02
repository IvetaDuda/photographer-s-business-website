import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import { portfolio } from '@/data/portfolio';
// import React from 'react';
import styles from './PortfolioHome.module.scss';

const PortfolioHome = () => {
  return (
    <section>
      <div className={`container`}>
        <ul className={styles.portfolioList}>
          {portfolio.map(({ id, title, services, img }, index) => (
            // <React.Fragment key={id}>
            //   {index === portfolio.length - 1 && (
            //     <li className={styles.buttonItem}>
            //       <ButtonLink title="Переглянути Портфоліо" href="/portfolio" />
            //     </li>
            //   )}
            <li
              key={id}
              className={styles.portfolioItem}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className={styles.portfolioContent}>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.servicesList}>
                  {services.map((value, index) => (
                    <li id={index}>&#9679; {value}</li>
                  ))}
                </ul>
              </div>
            </li>
            // </React.Fragment>
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
