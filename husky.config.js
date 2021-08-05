module.exports = {
  hooks: {
    "pre-commit": "npm run test && npm run lint",
    "commit-msg": 'npx --no-install commitlint --edit "$1"',
  },
}
