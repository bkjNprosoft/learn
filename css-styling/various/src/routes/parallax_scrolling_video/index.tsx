import ParallaxScrollingVideoPage from '@/pages/parallax_scrolling_video'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parallax_scrolling_video/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ParallaxScrollingVideoPage />
}
