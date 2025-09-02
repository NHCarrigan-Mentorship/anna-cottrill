import baseConfig from './.lintstagedrc.js'

export default {
  ...baseConfig,
  '*.js': 'eslint --fix',
  '*.ts': 'eslint --fix',
  '*.tsx': 'eslint --fix',
}
