module.exports = {
    // This lets us debug our react code in chrome dev tools.
    // Errors will have lines and file names
    // Without this the console says all errors are coming from bundle.js
    devtool: 'eval-source-map',
    // This is the entry point or start of our react applicaton
    entry: './app/app.js',
    // This section desribes the transformations we will perform
    module: {
        loaders: [
            {
                // Webpack will only process files in our app folder.
                // This avoids processing modules, server files unnecessarily
                include: /app/,
                loader: 'babel-loader',
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ['es2015', 'react', 'stage-0']
                },
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/
            }
        ]
    },

    // The plain compiled JavaScript will be output into this file
    output: {filename: 'public/bundle.js'}
};
