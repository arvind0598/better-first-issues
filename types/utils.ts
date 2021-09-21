export type MinMax<T> = {
  min?: T;
  max?: T;
};

export type MinMaxOrNum = MinMax<number> | number;

export type MinMaxString = MinMax<string>;

export type SortOrder = 'asc' | 'desc';

export type Empty = {};

// LANGUAGE

// this has way more but i don't really care for any of them at this stage.
export type LanguageConfig = {
  color: string;
};

// REQUEST RESPONSE

export type Response<T> = {
  success: boolean;
  message?: string;
  data?: T;
};
