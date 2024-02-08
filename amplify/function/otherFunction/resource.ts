import { defineFunction, secret } from "@aws-amplify/backend";

export const otherFunction = defineFunction({
    name: 'otherFunction',
    environment: {
        TEST_ENV: 'testEnv',
        TEST_SECRET: secret('testSecret'),
        TEST_BRANCH_SECRET: secret('testBranchSecret'),
    }
})