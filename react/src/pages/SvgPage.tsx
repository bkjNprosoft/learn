import SvgComponent from '../components/common/SvgComponent';

const SvgPage = () => {

  return (
    <main className='flex justify-center items-center gap-[30px]'>
      <div className='relative w-[300px] h-[300px]'>
        <SvgComponent url='/svg-page/bethard.svg' color='#3FC' />
      </div>
      <div className='relative w-[500px] h-[500px]'>
        <SvgComponent url='/svg-page/map.svg' color='red' />
      </div>
    </main>
  );
};

export default SvgPage;
