import { RepositorySearchFilters } from '../../types/repository-search';

const formatQuery = (data: Record<string, string>, name?: string) => {
  const values = Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&');
  if (name) return `${name}+${values}`;
  return values;
};

const createRepositorySearchQuery = ({
  name,
  language,
}: RepositorySearchFilters): string => {
  const parameters: Record<string, string> = {};
  if (language) {
    parameters.language = language;
  }
  return formatQuery(parameters, name);
};

export default createRepositorySearchQuery;
