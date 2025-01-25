import RWDPage from '@/pages/rwd';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/rwd/')({
  component: RWDPage,
});
