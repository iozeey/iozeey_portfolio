
import React, { useEffect, useRef } from 'react';
import styles from './CounterSection.module.css';

const counters = [
  {
    icon: 'flaticon-suitcase',
    number: 70,
    label: 'Project Complete',
  },
  {
    icon: 'flaticon-loyalty',
    number: 35,
    label: 'Happy Clients',
  },
  {
    icon: 'flaticon-calendar',
    number: 9,
    label: 'Years Experienced',
  },
];

const CounterSection: React.FC = () => {
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    numberRefs.current.forEach((el, idx) => {
      if (!el) return;
      const target = counters[idx].number;
      // let start = 0;
      const duration = 1200;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const animate = () => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString();
        } else {
          el.textContent = current.toString();
          requestAnimationFrame(animate);
        }
      };
      animate();
    });
  }, []);

  return (
    <section className={styles.counterSection} id="section-counter">
      <div className={styles.counterGrid}>
        {counters.map((counter, idx) => (
          <div className={styles.counterCard} key={counter.label}>
            <div className={styles.counterIcon}>
              <span className={counter.icon}></span>
            </div>
            <span
              className={styles.counterNumber}
              ref={el => {
                numberRefs.current[idx] = el;
              }}
            >
              0
            </span>
            <div className={styles.counterLabel}>{counter.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
