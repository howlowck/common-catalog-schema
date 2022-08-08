
// Get version from package.json
const fs = require('fs');
const packageJson = require('../package.json');
const currentVersion = packageJson.version;

// Get versions.json
const versionJson = require('../schema-versions.json');
const versionsObj = versionJson.oneOf;
const foundExistingVersion = versionsObj.find(_ => _.allOf[0]?.properties?.version?.const === currentVersion)

if (foundExistingVersion) {
    console.log(`Version ${currentVersion} already exists`)
    return
}

console.log(`Generating version ${currentVersion}...`)

const newVersion = {
    allOf: [
        {
            properties: {
                version: {
                    const: currentVersion
                }
            }
        },
        {
            "$ref": `https://raw.githubusercontent.com/howlowck/common-catalog-schema/main/json-schemas/schema-${currentVersion}.json`
        }
    ]
}

const newVersionsObj = [newVersion, ...versionsObj];

versionJson.oneOf = newVersionsObj;

// console.log(JSON.stringify(versionJson, null, 4))

fs.writeFileSync('./schema-versions.json', JSON.stringify(versionJson, null, 4));
