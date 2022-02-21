module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-typescript',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
