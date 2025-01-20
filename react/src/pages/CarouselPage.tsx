import { Carousel01, Carousel01Item } from '../components/carausel/Carousel01';

const CarouselPage = () => {
  const cardList: Carousel01Item[] = [
    {
      imgSrc: '/carousel/1.png',
      title: 'item_01_title',
    },
    {
      imgSrc: '/carousel/2.png',
      title: 'item_02_title',
    },
    {
      imgSrc: '/carousel/3.png',
      title: 'item_03_title',
    },
    {
      imgSrc: '/carousel/4.png',
      title: 'item_04_title',
    },
  ];

  return (
    <main>
      <Carousel01 cardList={cardList} />
    </main>
  );
};

export default CarouselPage;
