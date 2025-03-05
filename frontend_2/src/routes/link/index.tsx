import { Slot, component$ } from "@builder.io/qwik";
import {links} from "../../components/links";

export default component$(() => {
    return <div >
        <div class="h-[calc(100vh-90px)] grid place-content-center">
            <h2 class="text-center text-16">Get in Contact</h2>
            <p class="text-center text-8 font-1">
                <Slot name="message" />
            </p>
            <div class="flex gap-4 justify-center mt-4">
                {links.map((item) => {
                    return (
                        <a
                            href={item.href}
                            class="cursor-pointer text-17px"
                            target="_blank"
                            key={item.text}
                        >
                            <div class="children:fill-blue children:text-blue" style={{ fontSize: "32px" }}>
                                <item.Img
                                    //@ts-ignore
                                    alt={item.text}
                                />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>

    </div>
        ;
});
