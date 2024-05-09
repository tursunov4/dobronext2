import "../assets/main.css";
import Footer from "@/components/Footer/Footer";
import Question from "@/components/Question/Question";
import { ContextProvider } from "@/context/Context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="./favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <script
        dangerouslySetInnerHTML={{
          __html: `  window.YandexRotorSettings = {
        WaiterEnabled: true,
      };`,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `    (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      ym(96845326, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });`,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/96845326"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      <ContextProvider>
        <body>
          {children}
          <Question />
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
