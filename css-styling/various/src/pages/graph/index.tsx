import DoughnutGraph02 from '@/components/common/DoughnutGraph02';
import { useGlobalNavOpenState } from '@/stores/store';
import { useEffect, useState } from 'react';
import DoughnutGraph01 from '@/components/common/DoughnutGraph01';

const GraphPage = () => {
  const isOpen = useGlobalNavOpenState(state => state.isOpen);
  return (
    <main className={`${isOpen ? 'ml-[200px]' : 'ml-[50px]'} transition-all duration-700`}>
      <DoughnutGraphSection />
    </main>
  );
};

const DoughnutGraphSection = () => {

  interface CircleGraphData {
    currentPercent: number;
    maxPercent: number;
    speed: number;
    timer: number[];
    count: number;
    maxCount: number;
    countTimer: number[];
  }

  const [circleGraphData, setCircleGraphData] = useState<CircleGraphData>({
    currentPercent: 0, maxPercent: 100, speed: 50, timer: [], count: 0, maxCount: 1000, countTimer: [],
  });

  function handleCircleDataAnimationStart(delay = 0) {
    if (circleGraphData.timer.length > 0 || circleGraphData.countTimer.length > 0) return;

    resetDataGraphPercent();
    circleDataGraphAnimationStart(delay);
    dataCountAnimationStart(delay);
  }

  function resetDataGraphPercent() {
    if (circleGraphData.timer.length > 0 || circleGraphData.countTimer.length > 0) return;

    for (const time of circleGraphData.timer) {
      circleGraphData.timer.shift();
      clearTimeout(time);
    }
    for (const time of circleGraphData.countTimer) {
      circleGraphData.countTimer.shift();
      clearTimeout(time);
    }

    circleGraphData.timer = [];
    circleGraphData.countTimer = [];
    circleGraphData.count = 0;
    circleGraphData.currentPercent = 0;
    circleGraphData.speed = 50;
    setCircleGraphData({ ...circleGraphData });
  }

  function circleDataGraphAnimationStart(delay = 0) {
    setTimeout(() => {
      circleDataGraphAnimation(-1111);
    }, delay);
  }

  function circleDataGraphAnimation(timer: number) {
    clearTimeout(circleGraphData.timer.shift());
    circleGraphData.timer.push(timer);

    let newTimer: number = setTimeout(() => {
      circleGraphData.currentPercent++;
      if (circleGraphData.maxPercent < circleGraphData.currentPercent) {
        circleGraphData.currentPercent = circleGraphData.maxPercent;
        clearTimeout(circleGraphData.timer.shift());
        return;
      }

      // 최소 속도는 3ms
      circleGraphData.speed = Math.max(3, circleGraphData.speed - 4);
      setCircleGraphData({ ...circleGraphData });

      // 속도를 점점 빠르게 하기 위해 speed를 줄임
      clearTimeout(newTimer);
      newTimer = setTimeout(() => circleDataGraphAnimation(newTimer), circleGraphData.speed);
    }, circleGraphData.speed);
  }

  function dataCountAnimationStart(delay = 0) {
    setTimeout(() => {
      dataCountAnimation(-2222);
    }, delay);
  }

  function dataCountAnimation(timer: number) {
    clearTimeout(circleGraphData.countTimer.shift());
    circleGraphData.countTimer.push(timer);

    let newTimer: number = setTimeout(() => {
      if (circleGraphData.count < circleGraphData.maxCount) {
        circleGraphData.count = circleGraphData.currentPercent * 15;
        setCircleGraphData({ ...circleGraphData });
      } else {
        circleGraphData.count = circleGraphData.maxCount;
        setCircleGraphData({ ...circleGraphData });
        clearTimeout(circleGraphData.countTimer.shift());
        return;
      }

      clearTimeout(newTimer);
      newTimer = setTimeout(() => dataCountAnimation(newTimer), circleGraphData.speed);
    }, circleGraphData.speed);
  }

  return (
    <section className="relative flex flex-col justify-center items-center gap-[100px] py-[50px]">
      <div className='flex justify-evenly w-full'>
        <DoughnutGraph01 percent={circleGraphData.currentPercent} />
        <DoughnutGraph02 percent={circleGraphData.currentPercent} text={`${Intl.NumberFormat('ko').format(circleGraphData.count)}/1000`} />
        <DoughnutGraph02 percent={circleGraphData.currentPercent} text={`${circleGraphData.currentPercent}%`} />
      </div>
      <div className='flex justify-evenly w-full'>
        <button
          className='p-[10px] border-[1px] border-blue-500 rounded-md text-[20px]'
          onClick={() => handleCircleDataAnimationStart()}
        >
          start
        </button>
      </div>
    </section>
  );
};

export default GraphPage;
