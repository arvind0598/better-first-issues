import {
  MinMaxOrNum, MinMaxString, Response, SortOrder,
} from './utils';

export type RepositorySearchFilters = {
  name?: string;
  followers?: MinMaxOrNum;
  forks?: MinMaxOrNum;
  stars?: MinMaxOrNum;
  language?: string;
  pushed?: MinMaxString;
  topic?: string[];
};

export type RepositorySort = 'stars' | 'forks';

export type RepositorySearchParams = {
  sort?: RepositorySort;
  order?: SortOrder;
  perPage?: number;
  page?: number;
};

export type RepositorySearchRequest = {
  filters: RepositorySearchFilters;
  params: RepositorySearchParams;
};

export type RepositorySearchOutboundRequest = RepositorySearchParams & {
  query: string;
};

export type Repository = {
  name: string;
  description: string | null;
  owner?: string | null;
  fullName: string;
  url: string;
  language: string | null;
  forks: number;
  openIssues: number;
  watchers: number;
  stars: number;
};

export type RepositorySearchData = {
  totalCount: number;
  incompleteResults: boolean;
  data: Repository[];
};

export type RepositorySearchResponse = Response<RepositorySearchData>;
