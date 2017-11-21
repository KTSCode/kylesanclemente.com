/*
Linting rules related to React and JSX conventions
*/
module.exports = {
  rules: {
    'react/prefer-es6-class': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-boolean-value':2,
    'react/wrap-multilines':2,
    'react/self-closing-comp':2,
    'react/jsx-no-bind':[2, {
      ignoreRefs: true,
    }],
    'react/sort-comp': 2,
    'react/no-is-mounted': 2,
    'react/display-name': [1,{ ignoreTranspilerName: false }],
    'react/forbid-prop-types': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-equals-spacing': 1,
    'react/jsx-handler-names': 2,
    'react/jsx-indent-props': [2,2],
    'react/jsx-indent': [2,2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-prop-types': 1,
    'react/jsx-sort-props': [1,{
      callbacksLast: true,
      shorthandFirst: false,
      ignoreCase: true,
    }],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 1,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-extension': 1,
  },
};