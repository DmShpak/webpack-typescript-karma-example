const tests = require.context('./spec', true, /\.(ts|tsx)$/)
const modules = require.context('./src', true, /\.(ts|tsx)$/)

tests.keys().forEach(tests)
modules.keys().forEach(modules)



