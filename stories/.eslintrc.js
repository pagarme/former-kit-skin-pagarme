module.exports = {
  extends: "pagarme-react",
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [0],
    "import/no-extraneous-dependencies": ["warn", {
      devDependencies: true,
      peerDependencies: true,
    }],
    "react/prop-types": [0],
  },
};
