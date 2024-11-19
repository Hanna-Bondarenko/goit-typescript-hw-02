import axios from "axios";

const API_KEY = "NwHUaFllaTPn6c6rTUssUgiT3qayBYvrghpa_WPxTI4";
const BASE_URL = "https://api.unsplash.com/search/photos";

// Тип для одного зображення
export interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

// Тип для відповіді API
export interface ImageApiResponse {
  results: Image[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<ImageApiResponse> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data;
};
