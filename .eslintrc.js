module.exports =  {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": [
      "./tsconfig.json"
    ]
  },
  "plugins": ["@typescript-eslint"],
  "env": {
    "browser": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript"
  ],
  "ignorePatterns": ["*.js", "*.jsx"],
  "rules": {
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "no-param-reassign": 0,
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": 0,
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": false }],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "react/jsx-no-useless-fragment": ["error", {"allowExpressions":  true}],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "import/extensions": [
      "error",
      "never",
      {
        "json": "always",
        "ttf": "always",
        "jpg": "always",
        "svg": "always",
        "png": "always"
      }
    ]
  },
  "overrides": [
    {
      "files": ["*.mdx", "*.md"],
      ...require('./eslint-mdx'),
    }
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {"property": "freeze", "object": "Object"},
      {"property": "myFavoriteWrapper"},
      // for rules that check exact prop wrappers
      {"property": "forbidExtraProps", "exact": true}
    ],
    "componentWrapperFunctions": [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      "observer", // `property`
      {"property": "styled"}, // `object` is optional
      {"property": "observer", "object": "Mobx"},
      {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    "formComponents": [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      "CustomForm",
      {"name": "Form", "formAttribute": "endpoint"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  }
}
