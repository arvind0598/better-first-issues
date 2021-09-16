export type MinMax<T> = {
  min?: T;
  max?: T;
};

export type MinMaxOrNum = MinMax<number> | number;

export type MinMaxString = MinMax<string>;

export type SortOrder = 'asc' | 'desc';

// REQUEST RESPONSE

export type Response<T> = {
  success: boolean;
  message?: string;
  data?: T;
};
