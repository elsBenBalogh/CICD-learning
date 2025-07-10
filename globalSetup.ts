import * as dotenv from "dotenv";

async function globalSetup() {
    debugger;
    process.env.ENV = process.env.ENV || "local";
    dotenv.config({
        path: `./envs/.env.${process.env.ENV}`,
        override: false
    });
}

export default globalSetup;
