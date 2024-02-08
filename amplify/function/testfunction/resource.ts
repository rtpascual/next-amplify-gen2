import { defineFunction, secret } from "@aws-amplify/backend";

export const testFunction = defineFunction({
    name: 'testFunction',
    environment: {
        TEST_ENV: 'testEnv',
        TEST_SECRET: secret('testSecret'),
        TEST_BRANCH_SECRET: secret('testBranchSecret'),
    }
})