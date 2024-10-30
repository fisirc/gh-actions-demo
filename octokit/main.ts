import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
    auth: '$(gh auth token)',
    timeZone: 'America/Lima',
    baseUrl: 'https://api.github.com',
});

octokit.rest.issues.createComment({
})
