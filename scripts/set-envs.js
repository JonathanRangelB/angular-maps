const { mkdirSync, writeFileSync } = require("fs");
require("dotenv").config();

const targetPath = "./src/environments/environment.ts";

const envFileContent = `
export const environment = {
  MAPBOX_KEY: "${process.env.MAPBOX_KEY}",
}
`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
