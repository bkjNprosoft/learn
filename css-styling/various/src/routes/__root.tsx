import GlobalNav from "@/components/common/GlobalNav";
import { useGlobalNavOpenState } from "@/stores/store";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const Component = () => {
  const isOpen = useGlobalNavOpenState((state) => state.isOpen);

  return (
    <>
      <GlobalNav />
      <main
        className={`${isOpen ? "pl-[200px]" : "pl-[50px]"} transition-all duration-700`}
      >
        <Outlet />
      </main>
    </>
  );
};

export const Route = createRootRoute({
  component: Component,
});
