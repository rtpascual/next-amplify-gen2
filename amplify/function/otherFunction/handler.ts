export const handler = async () => {
    console.log('TEST_ENV', process.env.TEST_ENV)
    console.log('TEST_SECRET', process.env.TEST_SECRET)
    console.log('TEST_BRANCH_SECRET', process.env.TEST_BRANCH_SECRET)
}