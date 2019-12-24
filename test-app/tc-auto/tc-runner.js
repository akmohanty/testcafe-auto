const createTestCafe = require('testcafe');
let runner = null;
let testcafe = null;
var ip = require('ip');

var workerCount = 1;

// createTestCafe(ip.address(), 1337, 1338)
//     .then(tc => {
//         testcafe = tc;
//         runner = testcafe.createRunner();

//         return testcafe.createBrowserConnection();
//     })
//     .then(remoteConnection => {
//         console.log(remoteConnection.url);

//         remoteConnection.once('ready', () => {
//             runner
//                 .src('tc-auto/**/*.test.js')
//                 .browsers(remoteConnection)
//                 .run()
//                 .then(failedCount => {
//                     console.error(failedCount);
//                     testcafe.close();
//                 })
//                 .catch(error => {
//                     console.error(error)
//                 });
//         });
//     });



createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src('tc-auto/tests/**/*test.js')
            .browsers(['chrome'])
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });