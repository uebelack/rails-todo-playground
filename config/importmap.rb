# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap
pin 'react', to: 'https://ga.jspm.io/npm:react@17.0.2/index.js'
pin 'react-dom', to: 'https://ga.jspm.io/npm:react-dom@17.0.2/index.js'
pin 'object-assign', to: 'https://ga.jspm.io/npm:object-assign@4.1.1/index.js'
pin 'scheduler', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/index.js'

pin 'application', preload: true
pin "htm", to: "https://ga.jspm.io/npm:htm@3.1.0/dist/htm.module.js"
