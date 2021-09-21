import useSWR from 'swr';
import { RepositorySearchResponse } from '../types/repository-search';

type RepoData = {
  data: RepositorySearchResponse;
  isLoading: boolean;
  isError: string;
};

const fetcher = async (...args: string[]) => {
  const url = args[0];
  const repo = args[1];
  const body = JSON.stringify({ repo });
  const res = await fetch(url, { method: 'POST', body });
  return res.json();
};

const useRepoData = (repo: string): RepoData => {
  const { data, error } = useSWR(['/api/search/', repo], repo ? fetcher : null);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRepoData;
