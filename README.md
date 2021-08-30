# Directory Structure

```
├── node_modules
├── cypress
│   ├── fixtures
│   ├── integration
│   ├── plugins
│   ├── support
│   └── videos
├── public
├── src
│   ├── common
│   │   ├── assets
│   │   ├── components
│   │   ├── hooks
│   │   ├── styles
│   │   ├── types
│   │   └── utils
│   ├── containers
│   ├── modules
│   │   ├── api
│   │   └── provider
│   └── pages
│       └── api
├── storybook
│   └── components
└── test
```

- cypress:fixfures: mock 호출을 위해 필요한 데이터가 json 파일로 위치
- cypress:integration: 테스트 파일이 위치
- cypress:plugins: cypress 플러그인이 위치
