import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";

const proxyAgent = new HttpsProxyAgent("http://127.0.0.1:10808");

export const proxyFetch = (url, options = {}) =>
  fetch(url, {
    ...options,
    agent: proxyAgent,
  });
