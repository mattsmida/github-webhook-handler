const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

const owner = 'mattsmida';
const repo = 'test-doc-crossread';
const fileSha = '9c11a545f95c78342cb81ba4c2a644bb9e2b0d04';

async function getResponse() {
  const response = await octokit.request(
    `GET /repos/${owner}/${repo}/git/blobs/${fileSha}`);
  return response;
}

async function main() {
  console.log(await getResponse());
}

main();
