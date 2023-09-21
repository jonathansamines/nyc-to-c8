# nyc-to-c8

A sample project to explore some difference between nyc and c8


## Check coverage after instrumentation (simple node script)

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

## Check coverage after instrumentation (multiple node scripts)

```bash
npx nyc node test.js && node test-b.js
npx nyc check-coverage
```

### c8

```bash
npx c8 node test.js && node test-b.js
npx c8 check-coverage
```

## Check coverage after instrumentation (compiled script)

```bash
npx tsup index.ts test.js test-b.js --sourcemap
npx nyc --nycrc-path .nycrc-compiled.json node dist/test.js
npx nyc --nycrc-path .nycrc-compiled.json check-coverage
```

### c8

```bash
npx tsup index.ts test.js test-b.js --sourcemap
npx c8 --config .nycrc-compiled.json node dist/test.js
npx c8 --config .nycrc-compiled.json check-coverage
```