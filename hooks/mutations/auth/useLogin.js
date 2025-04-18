import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        credentials,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return response.data;
    },
  });

  return mutation;
};

export default useLogin;
