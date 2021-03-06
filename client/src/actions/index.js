export const FETCH_PALINDROMES = 'FETCH_PALINDROMES';
export const FETCH_PALINDROMES_REQUESTED = 'FETCH_PALINDROMES_REQUESTED';
export const FETCH_PALINDROMES_SUCCEEDED = 'FETCH_PALINDROMES_SUCCEEDED';
export const FETCH_PALINDROMES_FAILED = 'FETCH_PALINDROMES_FAILED';
export const ADD_PALINDROME = 'ADD_PALINDROME';
export const ADD_PALINDROME_REQUESTED = 'ADD_PALINDROME_REQUESTED';
export const ADD_PALINDROME_SUCCEEDED = 'ADD_PALINDROME_SUCCEEDED';
export const ADD_PALINDROME_FAILED = 'ADD_PALINDROME_FAILED';
export const REMOVE_PALINDROME = 'REMOVE_PALINDROME';
export const REMOVE_PALINDROME_REQUESTED = 'REMOVE_PALINDROME_REQUESTED';
export const REMOVE_PALINDROME_SUCCEEDED = 'REMOVE_PALINDROME_SUCCEEDED';
export const REMOVE_PALINDROME_FAILED = 'REMOVE_PALINDROME_FAILED';

export const fetchPalindromes = () => ({ type: FETCH_PALINDROMES_REQUESTED });
export const addPalindrome = string => ({
  type: ADD_PALINDROME_REQUESTED,
  payload: string
});
export const removePalindrome = id => ({
  type: REMOVE_PALINDROME_REQUESTED,
  payload: id
});
