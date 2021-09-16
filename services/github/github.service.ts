import { Octokit } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import { RepositorySearchOutboundRequest } from '../../types/repository-search';
import { Api } from '@octokit/plugin-rest-endpoint-methods/dist-types/types';

export class GithubService {
  octokit: Octokit & Api;

  constructor() {
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    this.octokit = new MyOctokit({
      //   auth: this.configService.get<string>('GITHUB_TEST_PAT'),
      auth: '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',
    });
    this.authenticate();
  }

  private async authenticate() {
    const {
      data: { login },
    } = await this.octokit.rest.users.getAuthenticated();
    console.log('Hello, %s', login);
  }

  async getRepositories(request: RepositorySearchOutboundRequest) {
    console.log({
      q: request.query,
      sort: request.sort,
      order: request.order,
      per_page: request.perPage,
      page: request.page,
    });
    return this.octokit.rest.search.repos({
      q: request.query,
      sort: request.sort,
      order: request.order || 'asc',
      per_page: request.perPage,
      page: request.page,
    });
  }
}
