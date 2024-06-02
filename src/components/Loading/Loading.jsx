'use client';

import { useEffect, useState } from 'react';
import styles from './Loading.module.scss';

const Loading = ({ className }) => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => setIsLoad(false), []);

  return (
    <div className={styles.loadingContainer}>
      <h3 className={`${styles.loading} ${className}`}>...Loading</h3>
    </div>
  );
};

export default Loading;
