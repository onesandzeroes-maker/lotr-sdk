'use strict'

module.exports = {
  diff: true,
  extension: ['ts'],
  package: './package.json',
  reporter: ['min', 'mochawesome'],
  spec: 'specs/**/*.spec.ts',
  timeout: '10000',
  slow: '75',
  color: true,
  watch: false,
  'watch-files': ['src/**/*.spec.js', 'src/**/*.spec.ts'],
  recursive: false,
  parallel: false,
  sort: false,
  require: ['ts-node/register']
}
