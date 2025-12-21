import { createApi } from "unsplash-js";
import { proxyFetch } from "../utils/proxy.js";
import config from "../config.js";

global.fetch = proxyFetch;

const unsplash = createApi({
  accessKey: config.unsplash.api_key,
  fetch,
});

export const searchImage = async (
  query,
  page = 1,
  perPage = 1,
  orientation = "landscape",
  orderBy = "relevant",
) => {
  const result = await unsplash.search.getPhotos({
    query,
    page,
    perPage,
    orientation,
    orderBy,
  });

  if (result.errors) {
    throw new Error(result.errors.join(", "));
  }

  const photo = result.response.results[0];
  if (!photo) return null;

  return {
    id: photo.id,
    url: photo.urls.regular,
    photographer: photo.user.name,
    profile: photo.user.links.html,
  };
};
