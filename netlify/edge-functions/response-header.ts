import type { Context, Config } from "@netlify/edge-functions";

const setHeader = async (request: Request, context: Context) => {
  throw new Error("Intentional runtime error for testing");

  const response = await context.next();
  response.headers.set("Test-Header", "valyew");
  return response;
};

export const config: Config = {
    path: "/*",
    onError: "/bypass"
}

export default setHeader;