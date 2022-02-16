# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

if Rails.env.development?
  pin 'react', to: 'https://ga.jspm.io/npm:react@17.0.2/dev.index.js'
  pin 'react-dom', to: 'https://ga.jspm.io/npm:react-dom@17.0.2/dev.index.js'
  pin 'object-assign', to: 'https://ga.jspm.io/npm:object-assign@4.1.1/index.js'
  pin 'scheduler', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/dev.index.js'
  pin 'scheduler/tracing', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/dev.tracing.js'
  pin 'prop-types', to: 'https://ga.jspm.io/npm:prop-types@15.8.0/dev.index.js'
else
  pin 'react', to: 'https://ga.jspm.io/npm:react@17.0.2/index.js'
  pin 'object-assign', to: 'https://ga.jspm.io/npm:object-assign@4.1.1/index.js'
  pin 'react-dom', to: 'https://ga.jspm.io/npm:react-dom@17.0.2/index.js'
  pin 'scheduler', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/index.js'
  pin 'prop-types', to: 'https://ga.jspm.io/npm:prop-types@15.8.0/index.js'
end

pin 'axios', to: 'https://ga.jspm.io/npm:axios@0.21.4/index.js'
pin '#lib/adapters/http.js', to: 'https://ga.jspm.io/npm:axios@0.21.4/lib/adapters/xhr.js'
pin 'process', to: 'https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.19/nodelibs/browser/process-production.js'
pin 'formik', to: 'https://ga.jspm.io/npm:formik@2.2.9/dist/formik.esm.js'
pin 'deepmerge', to: 'https://ga.jspm.io/npm:deepmerge@2.2.1/dist/umd.js'
pin 'hoist-non-react-statics', to: 'https://ga.jspm.io/npm:hoist-non-react-statics@3.3.2/dist/hoist-non-react-statics.cjs.js'
pin 'lodash-es/clone', to: 'https://ga.jspm.io/npm:lodash-es@4.17.21/clone.js'
pin 'lodash-es/cloneDeep', to: 'https://ga.jspm.io/npm:lodash-es@4.17.21/cloneDeep.js'
pin 'lodash-es/isPlainObject', to: 'https://ga.jspm.io/npm:lodash-es@4.17.21/isPlainObject.js'
pin 'lodash-es/toPath', to: 'https://ga.jspm.io/npm:lodash-es@4.17.21/toPath.js'
pin 'react-fast-compare', to: 'https://ga.jspm.io/npm:react-fast-compare@2.0.4/index.js'
pin 'react-is', to: 'https://ga.jspm.io/npm:react-is@16.13.1/index.js'
pin 'tiny-warning', to: 'https://ga.jspm.io/npm:tiny-warning@1.0.3/dist/tiny-warning.esm.js'

pin 'application', preload: true
