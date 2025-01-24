'use client'

import React from 'react';
import styles from './SFButtonB.module.css';
import Image from 'next/image';

interface SFButtonBProps {
  label: string;
}

const SFButtonB: React.FC<SFButtonBProps> = ({label}) => {
  const spotlightRef = React.useRef<HTMLDivElement>(null);

  const spotlightMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.target as HTMLDivElement;
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left - spotlight.offsetWidth / 2;
    const y = event.clientY - rect.top - spotlight.offsetHeight / 2;
    spotlight.style.left = x + 'px';
    spotlight.style.top = y + 'px';
  };

  const spotlightLeave = () => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    spotlight.style.opacity = '0';
  };

  const spotlightEnter = () => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    spotlight.style.opacity = '1';
  };

  return (
    <div
      className={styles.buttonContainer}
      onMouseMove={spotlightMove}
      onMouseLeave={spotlightLeave}
      onMouseEnter={spotlightEnter}
    >
      <div className={styles.spotlightContainer}>
        <div ref={spotlightRef} className={styles.spotlight}></div>
      </div>
      <div className={styles.buttonContent}>
        <Image className={styles.buttonImg} src="/img/button-b.svg" alt="{label}" height={53} width={200}/>
        <span className={styles.buttonText}>{label}</span>
      </div>
    </div>
  );
};

export default SFButtonB;
