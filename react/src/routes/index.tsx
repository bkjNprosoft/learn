import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Main,
});

function Main() {

  useEffect(() => {
    document.title = 'React';
  }, []);

  return (
    <main className='flex justify-center items-center w-screen h-screen'>
      <p className='text-[10rem] font-bold'>HELLO WORLD</p>
    </main>
  );
}
