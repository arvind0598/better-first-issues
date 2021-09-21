import { promises } from 'fs';
import YAML from 'yaml';
import { LanguageConfig } from '../../types/utils';

const getLanguageColorPair = (data: [string, unknown]): [string, string] => (
  [data[0], (data[1] as LanguageConfig).color]
);

const readLanguageConfig = async (path: string): Promise<Record<string, string>> => {
  const file = await promises.readFile(path);
  const languages = YAML.parse(file.toString());
  const languageConfig = Object.entries(languages).map(getLanguageColorPair);
  return Object.assign({}, ...languageConfig);
};

export default readLanguageConfig;
