import { useState } from "react";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_ALT_GITHUB_TOKEN,
});

export function useLogin() {
  const [user, setUser] = useState(null); // the authenticated user object
  const [error, setError] = useState(null); // when there was an error logging/searching user, we can display this error on the UI
  const [isLoading, setIsLoading] = useState(false); // when user is logging so we use this state to update loading buttons etc

  const onSubmit = async (username) => {
    try {
      setIsLoading(true);

      const { data } = await (username
        ? octokit.rest.users.getByUsername({ username })
        : octokit.rest.users.getAuthenticated());

      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    error,
    onSubmit,
    isLoading,
    isError: error !== null,
  };
}
