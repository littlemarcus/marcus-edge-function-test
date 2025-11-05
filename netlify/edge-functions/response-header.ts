import type { Context } from "@netlify/edge-functions";

const setHeader = async (request: Request, context: Context) => {
  const response = await context.next();
  response.headers.set("Test-Header", "valyew");
  return response;
};

export const config: Config = {
    path: "/*",
}

export default setHeader;