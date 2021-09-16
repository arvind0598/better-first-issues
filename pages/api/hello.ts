// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Octokit } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async(req: NextApiRequest, res: NextApiResponse<any>) => {
  const MyOctokit = Octokit.plugin(restEndpointMethods);
  const octokit = new MyOctokit({});
  const result = await octokit.rest.search.repos({
    q: 'language=ruby',
    sort: 'stars',
    order: 'asc',
    per_page: 10,
    page: 1,
  });
  res.status(200).json(result)
}

export default handler;