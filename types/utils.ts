export type MinMax<T> = {
  min?: T;
  max?: T;
};

export type MinMaxOrNum = MinMax<number> | number;

export type MinMaxString = MinMax<string>;

export type SortOrder = 'asc' | 'desc';

export type Empty = {};

// REQUEST RESPONSE

export type Response<T> = {
  success: boolean;
  message?: string;
  data?: T;
};
