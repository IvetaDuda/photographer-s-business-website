import styles from './AboutMePage.module.scss';

const AboutMePage = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={`container ${styles.aboutMeContainer}`}>
        <h1 className={styles.title}>Про мене</h1>
      </div>
    </section>
  );
};

export default AboutMePage;
