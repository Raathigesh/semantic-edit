var webpack = require('webpack');
var path = require('path');

module.exports = {
  externals: {
    // Make sure we use Meteor package for jQuery and react
    'jquery': '$',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-addons-transition-group': 'React.addons.TransitionGroup',
    'react-addons-create-fragment': 'React.addons.createFragment',
    'react-addons-pure-render-mixin': 'React.addons.PureRenderMixin',
    'react-addons-update': 'React.addons.update',
    'react-addons-linked-state-mixin': 'React.addons.PureRenderMixin'
  },
  devServer: {
    // You can change this to your server IP address to access it remotely
    host: 'localhost'
  },
  resolve: {
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json', '.css']
  }
};
