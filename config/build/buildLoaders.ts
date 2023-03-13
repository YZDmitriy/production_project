import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  // для понимания webpack файлов svg png  и др....
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  // для понимания webpack файлов svg png  и др....
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // babel webpack
  const babelLoader = buildBabelLoader(options);

  // для понимания webpack ом файлов SCSS
  const cssLoader = buildCssLoader(isDev);

  // Если не используем TS нужен babel-loader !!!
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
