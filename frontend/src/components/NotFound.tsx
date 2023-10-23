import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const NotFound = component$(() => {
  return (
    <div class="grid place-content-center items-center text-center h-60vh">
      <div>
        404 | <Slot />
      </div>
      <Link class="a" href="/">
        Go Home
      </Link>
    </div>
  );
});

export default NotFound;
