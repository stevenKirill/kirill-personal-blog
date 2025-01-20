module.exports = {
  extends: [
    'plugin:mdx/recommended',
  ],
  parser: 'eslint-mdx',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      parser: 'eslint-mdx',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    }
  ],
  settings: {
    'mdx/code-blocks': true,
    'mdx/jsx': true
  },
  rules: {
    'no-unused-vars': 'off',
    'mdx/remark': [
      'error',
      {
        'max-line-length': 100,
        // Проверка правописания
        'spelling': false,
        // Согласованное использование заголовков
        'heading-style': 'atx',
        // Согласованное использование списков
        'list-item-spacing': true,
        // Проверка корректности ссылок
        'no-dead-urls': false
      }
    ],

    // Правила для JSX в MDX
    'mdx/jsx': [
      'error',
      {
        // Разрешаем JSX только внутри блоков кода
        'jsxInMarkdown': false,
        // Проверяем пропсы в компонентах
        'validateJSX': true
      }
    ],

    // Правила для кодовых блоков
    'mdx/code-blocks': [
      'error',
      {
        // Проверка синтаксиса в блоках кода
        'validateCode': true,
        // Требовать указание языка
        'languageRequired': true
      }
    ]
  },
};
