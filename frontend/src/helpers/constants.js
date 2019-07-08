/* eslint-disable no-undef */
// ACTIONS //
export const BUSY_COUNTER_ADD = 'BUSY_COUNTER_ADD';
export const BUSY_COUNTER_REMOVE = 'BUSY_COUNTER_REMOVE';
export const DIALOG_ADD = 'DIALOG_ADD';
export const DIALOG_REMOVE = 'DIALOG_REMOVE';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// URL SPOTIFY REDIRECT
export const URLS = {
  local: 'http://localhost:3000/api',
  develop: 'http://localhost:3000/api',
  production: 'http://localhost:3000/api',
};

const env = ENV;
export const BASE_URL = URLS[env];
