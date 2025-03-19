import axios from "axios";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_WORKS_URL, {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
      },
    });
    return { data: response.data, loading: false, error: null };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: [], loading: false, error: error.message };
  }
};