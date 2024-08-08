import axios from "axios";

// Instance of Axios with default configurations
const apiClient = axios.create({
  baseURL: "https://8472-2403-a080-c04-576-984c-90d6-ef93-2520.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true" // Set the header
  },
});

// API call for search data function
export const searchData = async (query) => {
  try {
    console.log("Calling API with query:", query);
    const response = await apiClient.get("/search", {
      params: { tools: query },
    });
    console.log("API response:", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw error to be caught in handleSearch
  }
};


// API call for add data function
export const addData = async ({ id, name, tools, project }) => {
  try {
    const response = await apiClient.post(
      "/submit",
      { id, name, tools, project },
      {
        headers: {
          Authorization: "Bearer YOUR_API_TOKEN", // replace with actual token or other headers
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error;
  }
};
