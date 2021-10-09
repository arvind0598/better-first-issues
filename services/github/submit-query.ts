import { Octokit } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import { RepositorySearchOutboundRequest } from '@/types/repository-search';

const MyOctokit = Octokit.plugin(restEndpointMethods);
const octokit = new MyOctokit({});

const getRepositories = async (request: RepositorySearchOutboundRequest) => {
  console.log({
    q: request.query,
    sort: request.sort,
    order: request.order,
    per_page: request.perPage,
    page: request.page,
  });
  return octokit.rest.search.repos({
    q: request.query,
    sort: request.sort,
    order: request.order,
    per_page: request.perPage,
    page: request.page,
  });
};

export default getRepositories;
