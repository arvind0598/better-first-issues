import useSWR from 'swr';
import { RepositorySearchResponse } from '../types/repository-search';

type RepoData = {
  data: RepositorySearchResponse;
  isLoading: boolean;
  isError: string;
};

/**
 * @summary This function serves as an SWR fetcher for any URL
 *
 * @description
 * useSWR requires a fetcher. The fetcher is passed all the variables that
 * are part of the first parameter of useSWR. So, we just mirror that setup
 * in this function, and then perform the actual fetch to the API.
 *
 * It's async because....there's a fetch going on.
 *
 * @param {string[]} args - a variable number of string parameters
 * @returns a promise of a JSON response from the API
 */
const fetcher = async (...args: string[]) => {
  const url = args[0];
  const repo = args[1];
  const body = JSON.stringify({ repo });
  const res = await fetch(url, { method: 'POST', body });
  return res.json();
};

/**
 * @summary This function creates a hook to get the repository search data.
 *
 * @description
 * This hook internally uses useSWR to get the repository search data. We make
 * sure that the repo is not NULL so that we don't waste time in sending data
 * to the server even before anything is entered.
 *
 * This function is almost word-to-word off the standard documentation for
 * useSWR.
 *
 * @param {string} repo the text to search for.
 * @returns {RepoData} a wrapper around the API response with utility fields.
 */
const useRepoData = (repo: string): RepoData => {
  const { data, error } = useSWR(['/api/search/', repo], repo ? fetcher : null);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRepoData;
