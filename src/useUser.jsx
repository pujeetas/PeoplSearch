import { useEffect, useState } from "react";

const useUser = () => {
  const [userData, setUserData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  // return userData;
  return { data: userData, isLoading: isLoading, setIsLoading: setIsLoading };
};

export default useUser;
