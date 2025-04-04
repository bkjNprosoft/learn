import { useGlobalNavOpenState } from "@/stores/store";
import chickVideo from "@/assets/chick.mp4";

const ParallaxScrollingVideoPage = () => {
  const isOpen = useGlobalNavOpenState((state) => state.isOpen);
  return (
    <main
      className={`${isOpen ? "ml-[200px]" : "ml-[50px]"} transition-all duration-700`}
    >
      <video
        className={`fixed top-0 ${isOpen ? "left-[200px]" : "left-[50px]"} w-screen h-screen object-cover z-[-1] transition-all duration-700`}
        autoPlay
        muted
        loop
      >
        <source src={chickVideo} type="video/mp4" />
      </video>

      <div className="relative flex items-center h-[100px] px-[50px] bg-yellow-600 bg-opacity-80 text-gray-300">
        Scroll down to see the Video Parallax Effect
      </div>

      <div className="h-[300px] bg-[rgba(150,150,150,0.3)]"></div>

      <div className="relative flex flex-col justify-center items-center min-h-[500px] p-[20px] bg-yellow-600 bg-opacity-80 text-gray-300 ">
        <h3 className="text-[gold] text-center">Video Parallax Effect</h3>
        <p>HELLO WORLD</p>
      </div>

      <div className="h-[500px]">Background Parallax Video</div>

      <div className="relative flex flex-col justify-center items-center h-[300px] p-[20px] bg-yellow-600 bg-opacity-80 text-gray-300 ">
        <h3 className="text-[gold] text-center">NICE!</h3>
      </div>

      <footer className="flex justify-center items-center h-[200px] text-orange-400 bg-[rgba(150,150,150,0.3)]"></footer>
    </main>
  );
};

export default ParallaxScrollingVideoPage;
