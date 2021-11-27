import { useState, useCallback } from "react";

// requestConfig will be an object that will contain the url,type of request etc
const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET", // GET, POST, PUT, DELETE
          headers: requestConfig.headers ? requestConfig.headers : {}, // { "Content-Type": "application/json" }
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null, // { text: "some text" }
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [applyData]
  );
  // similar to { isLoading: isLoading, error: error }
  return { isLoading, error, sendRequest }; // return state and function to send request
};

export default useHttp;
