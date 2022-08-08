const {resolve} = require("path")
const fs = require("fs")
const packageJson = require('../package.json');
const currentVersion = packageJson.version;

const TJS = require("typescript-json-schema");
// import * as TJS from "typescript-json-schema";

const fileName = `./json-schemas/schema-${currentVersion}.json`;

if (fs.existsSync(fileName)) {
  console.error(`Version ${currentVersion} already exists`);
  process.exit(1);
}

const defaultSettings = TJS.getDefaultArgs()

// optionally pass argument to schema generator
const settings = {
  ...defaultSettings,
    noExtraProps: true,
    propOrder: true,
    titles: true,
    out: `./json-schemas/schema-${currentVersion}.json`,
};

// optionally pass ts compiler options
const compilerOptions = {
    strictNullChecks: true,
};

TJS.exec('./src/schema.ts', 'CatalogSchema', settings);

// const program = TJS.getProgramFromFiles(
//   [resolve("./src/schema.ts")],
//   compilerOptions,
// );

// // // We can either get the schema for one file and one type...
// const schema = TJS.generateSchema(program, "CatalogSchema", settings);

// const content = JSON.stringify(schema, null, 4);

// fs.writeFileSync(`./json-schema/schema-${currentVersion}.json`, content);

// // ... or a generator that lets us incrementally get more schemas

// const generator = TJS.buildGenerator(program, settings);

// if (generator === null) {
//   process.exit(1)
// }

// // generator can be also reused to speed up generating the schema if usecase allows:
// const schemaWithReusedGenerator = TJS.generateSchema(program, "MyType", settings, [], generator);

// // all symbols
// const symbols = generator.getUserSymbols();

// // Get symbols for different types from generator.
// generator.getSchemaForSymbol("MyType");
// generator.getSchemaForSymbol("AnotherType");
