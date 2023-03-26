module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'no-console': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 入参覆写
    'no-param-reassign': 0,
    // this本地缓存
    '@typescript-eslint/no-this-alias': 0,
    'no-nested-ternary': 0,
    // 允许出现any
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-require-imports': 0,
    // node下允许使用require
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [

        'prettier',
        'plugin:prettier/recommended',

      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto'
          }
        ],
        '@typescript-eslint/no-unused-vars': 0
      }
    }
  ]
}
