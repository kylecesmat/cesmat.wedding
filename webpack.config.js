var webpack      = require('webpack');
var path         = require('path');
var npmPath      = path.resolve(__dirname, 'node_modules');
var environment  = (process.env.APP_ENV || 'development');
var autoprefixer = require('autoprefixer');
var config       = {
    entry : ['./src/main.js'],
    sassOptions  : (
        '?outputStyle=nested&includePaths[]=' + npmPath
    ),
    jsxLoaders : 'babel',
};

if (environment !== 'production') {
    config.entry.unshift('webpack/hot/dev-server');
    config.jsxLoaders = 'react-hot!babel';
};


module.exports = {
    entry : config.entry,

    output: {
        path       : path.resolve(__dirname, "public/js/"),
        filename   : "main.js",
        publicPath : "js/"
    },

    module: {
    preLoaders: [
        {
            test    : /\.jsx?$/,
            loader  : "eslint-loader",
            exclude : [/node_modules/, /public/]
        }
    ],
    loaders: [
        {
            test    : /\.scss$/,
            loader  : 'style!css-loader!postcss!sass-loader' + config.sassOptions,
            include : /scss/
        },
        {
            test    : /\.css$/,
            loader  : 'style!css-loader!postcss'
        },
        {
            test   : /\.gif$/,
            loader : "url-loader?limit=10000&mimetype=image/gif"
        },
        {
            test   : /\.jpg$/,
            loader : "url-loader?limit=10000&mimetype=image/jpg"
        },
        {
            test   : /\.png$/,
            loader : "url-loader?limit=10000&mimetype=image/png"
        },
        {
            test: /\.svg/,
            loader: "url-loader?limit=26000&mimetype=image/svg+xml"
        },
        {
            test   : /\.(woff|woff2|ttf|eot)/,
            loader : "url-loader?limit=1" },
        {
            test   : /\.jsx?$/,
            loader : config.jsxLoaders,
            exclude: [/node_modules/, /public/]
        },
        {
            test   : /\.json$/,
            loader : "json-loader"
        }
    ]
    },
    resolve    : {
        extensions : ['', '.js', '.jsx', '.css', '.scss'],
        alias      : {
            components : path.resolve(__dirname, "/src/components"),
            pages      : path.resolve(__dirname, "/src/pages"),
            images     : path.resolve(__dirname, "/src/assets/images"),
            actions    : path.resolve(__dirname, "/src/flux/actions"),
            stores     : path.resolve(__dirname, "/src/flux/stores"),
            Constants  : path.resolve(__dirname, "/src/flux/constants.js")
        }
    },
    plugins : [
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
    ],
    postcss : function() {
        return [autoprefixer];
    },
    eslint: {
        configFile: ".eslintrc"
    }
};
