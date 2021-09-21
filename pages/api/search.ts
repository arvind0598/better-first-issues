import type { NextApiRequest, NextApiResponse } from 'next';
import createRepositorySearchQuery from '../../services/github/create-query';
import getRepositories from '../../services/github/submit-query';
import { Repository, RepositorySearchResponse } from '../../types/repository-search';

const handler = async (req: NextApiRequest, res: NextApiResponse<RepositorySearchResponse>) => {
  const repoName = JSON.parse(req.body).repo;
  const query = createRepositorySearchQuery({ name: repoName });
  const { data } = await getRepositories({ query });
  const response = {
    totalCount: data.total_count,
    incompleteResults: data.incomplete_results,
    data: data.items.map(
      (item): Repository => ({
        name: item.name,
        description: item.description,
        owner: item.owner?.login,
        fullName: item.full_name,
        url: item.html_url,
        language: item.language,
        forks: item.forks,
        openIssues: item.open_issues,
        watchers: item.watchers_count,
        stars: item.stargazers_count,
      }),
    ),
  };
  res.status(200).json({
    success: !!response,
    data: response,
  });
};

export default handler;
