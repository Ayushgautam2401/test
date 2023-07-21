import React, { useState } from 'react';
import styles from './RangeSlider.module.css';

const RangeSlider = () => {
  const [rangePercent, setRangePercent] = useState('0');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRangePercent(value);
  };

  return (
    <div className={styles.container}>
      <input
        type="range"
        className={styles['range-slider']}
        value={rangePercent}
        onChange={handleChange}
      />
      <div className={styles['percent-container']}>
        <span className={styles['percent-label']}>{rangePercent}%</span>
      </div>
    </div>
  );
};

export default RangeSlider;
