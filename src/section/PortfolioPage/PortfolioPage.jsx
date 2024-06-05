import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <section className={styles.portfolio}>
      <div className={`container ${styles.portfolioContainer}`}>
        <h1 className={styles.title}>Портфоліо</h1>
        <ul className={styles.galery}>
          {portfolio.map(({ id, services, img, title }) => (
            <li className={styles.portfolioCard} key={id}>
              <div className={styles.portfolioContent}>
                <h3 className={styles.subtitle}>{title} :</h3>
                <ul className={styles.servicesList}>
                  {services.map((value, index) => (
                    <li key={index}>&#9679; {value}</li>
                  ))}
                </ul>
              </div>
              <ul className={styles.itemImgContainer}>
                {img.map((value, index) => (
                  <li key={index} className={styles.imgContainer}>
                    <Image
                      src={value}
                      alt={title}
                      fill={true}
                      className={styles.img}
                      sizes="100%"
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioPage;

// import { portfolio } from '@/data/portfolio';
// import Image from 'next/image';
// import styles from './PortfolioPage.module.scss';

// const PortfolioPage = () => {
//   return (
//     <section className={styles.portfolio}>
//       <div className={`container ${styles.portfolioContainer}`}>
//         <h1 className={styles.title}>Портфоліо</h1>
//         <ul className={styles.galery}>
//           {portfolio.map(({ id, services, img, title }) => {
//             return img.map((value, index) => (
//               <li key={index} className={styles.imgContainer}>
//                 <Image
//                   src={value}
//                   alt={title}
//                   fill={true}
//                   className={styles.img}
//                   sizes="100%"
//                 />
//               </li>
//             ));
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default PortfolioPage;
