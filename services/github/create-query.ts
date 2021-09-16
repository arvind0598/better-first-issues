import { RepositorySearchFilters } from '../../types/repository-search';

const createRepositorySearchQuery = ({
  language,
}: RepositorySearchFilters): string => {
  let query = '';
  if (language) {
    query += `language:${language}`;
  }
  return query;
};

export default createRepositorySearchQuery;
