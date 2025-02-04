import { useEffect, useState } from 'react';

export const useCountUpLinear = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber++;
      const progress = currentNumber / totalFrame;
      setCount(Math.round(end * Math.min(progress, 1)));

      if (progress >= 1) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, frameRate, start, totalFrame]);

  return count;
};

const easeOutSine = (t: number): number => t === 1 ? 1 : Math.sin(t * (Math.PI / 2));

export const useCountUpEaseOutSine = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber++;
      const progress = easeOutSine(currentNumber / totalFrame);
      setCount(Math.round(end * progress));

      if (progress >= 1) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, frameRate, start, totalFrame]);

  return count;
};

const easeOutQuad = (t: number): number => t * (2 - t);

export const useCountUpEaseOutQuad = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber++;
      const progress = easeOutQuad(currentNumber / totalFrame);
      setCount(Math.round(end * progress));

      if (currentNumber >= totalFrame) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, frameRate, start, totalFrame]);

  return count;
};


const easeOutExpo = (t: number): number => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export const useCountUpEaseOutExpo = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber++;
      const progress = easeOutExpo(currentNumber / totalFrame);
      setCount(Math.round(end * progress));

      if (progress >= 1) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, frameRate, start, totalFrame]);

  return count;
};

