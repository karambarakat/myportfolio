import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isDev } from "@builder.io/qwik";
import "tailwindcss-preflight/preflight.css";
import "virtual:uno.css";


export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */

    return (
        <QwikCityProvider>
            <head>
                <meta charset="utf-8" />
                {!isDev && (
                    <link
                        rel="manifest"
                        href={`${import.meta.env.BASE_URL}manifest.json`}
                    />
                )}
                <link rel="icon" type="image/png" href="/favicon.png" />
                <RouterHead />
            </head>
            <body lang="en" class="base font-sans">
                <RouterOutlet />
                {!isDev && <ServiceWorkerRegister />}
            </body>
        </QwikCityProvider>
    );
});
