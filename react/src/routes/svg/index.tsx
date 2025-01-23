import { createFileRoute } from '@tanstack/react-router';
import SvgPage from '../../pages/SvgPage';

export const Route = createFileRoute('/svg/')({
  component: SvgPage,
})

