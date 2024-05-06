// debería haber creado archivos html separados...

import Bun from "bun";

const template = await Bun.file(`${__dirname}/index.html`).text();

function jsResponse(version: string) {
  return new Response(Bun.file(`${__dirname}/${version}`), {
    status: 200,
    headers: { "Content-Type": "application/javascript" },
  });
}

export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const pattern = `${request.method} ${url.pathname}`;

    switch (pattern) {
      case "GET /":
        const html = template.replace("VERSION", url.searchParams.get("version") || "v1.tsx");
        return new Response(html, { status: 200, headers: { "Content-Type": "text/html" } });
      case "GET /v1.tsx":
        return jsResponse("v1.tsx");
      case "GET /v2.jsx":
        return jsResponse("v2.jsx");
      case "GET /v3.js":
        return jsResponse("v3.js");
      default:
        return new Response("Not Found", { status: 404 });
    }
  },
};
