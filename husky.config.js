module.exports = {
  hooks: {
    "commit-msg": 'npx --no-install commitlint --edit "$1"',
  },
}
