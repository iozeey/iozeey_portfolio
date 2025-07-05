import React, { useEffect, useRef, useState } from 'react';

const counters = [
  {
    icon: '💼',
    number: 70,
    label: 'Projects Complete',
    suffix: '+'
  },
  {
    icon: '😊',
    number: 35,
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    icon: '🎯',
    number: 8,
    label: 'Years Experience',
    suffix: '+'
  },
  {
    icon: '⏰',
    number: 24,
    label: 'Support Available',
    suffix: '/7'
  },
];

const CounterSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const startCountAnimation = () => {
      numberRefs.current.forEach((el, idx) => {
        if (!el) return;
        const target = counters[idx].number;
        const duration = 2000;
        const steps = 60;
        const stepValue = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += stepValue;
          if (current >= target) {
            el.textContent = target.toString();
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current).toString();
          }
        }, duration / steps);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="counter-section section">
      <div className="container">
        <div className="counter-grid">
          {counters.map((counter, idx) => (
            <div key={counter.label} className="counter-item animate-fadeInUp">
              <div className="counter-icon">
                {counter.icon}
              </div>
              <div className="counter-content">
                <span className="counter-number">
                  <span
                    ref={el => {
                      numberRefs.current[idx] = el;
                    }}
                  >
                    0
                  </span>
                  {counter.suffix}
                </span>
                <span className="counter-label">{counter.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
