import styles from './BackgroundAnimation.module.scss';

const BackgroundAnimation = () => {
  return (
    <div className={`${styles.lines}`}>
      {[...Array(5)].map((_, index) => (
        <div key={index} className={styles.line}></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
