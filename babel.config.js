module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow"
  ],
  "plugins": [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-class-properties",
    ["import", {
      "libraryName": "antd",
      "style": true,   // or 'css'
    }]
  ]
}