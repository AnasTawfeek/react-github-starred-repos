import queryString from 'query-string'

// Github app info
export const CREDENTIALS = {
    client_id: 'ff778fe1ce8b10030c4b',
    client_secret: '929deac6d2540cd952d1c44678b354d7e25fa970'
}

// Endpoints
export const GITHUB_ROOT = 'https://api.github.com/search';
export const GITHUB_REPOS = config => `${GITHUB_ROOT}/repositories?${queryString.stringify({...config, ...CREDENTIALS})}`;
