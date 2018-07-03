exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name    : "@babel/plugin-proposal-decorators",
    options : {
      "legacy" : true
    }
  });
  actions.setBabelPlugin({
    name : "@babel/plugin-proposal-class-properties",
    options : {
      "loose" : true
    }
  });
}
