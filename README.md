# nyc-to-c8

A sample project to explore some difference between nyc and c8


## Check coverage after instrumentation

### nyc

```bash
npx nyc node test.js
npx nyc check-coverage
```

### c8

```bash
npx c8 node test.js
npx c8 check-coverage
```