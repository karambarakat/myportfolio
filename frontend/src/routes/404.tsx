import { component$ } from "@builder.io/qwik";
import NotFound from "~/components/NotFound";

export default component$(function () {
  return (
    <NotFound>
      <span>Page not found</span>
    </NotFound>
  );
});
