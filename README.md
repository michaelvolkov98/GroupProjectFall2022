# GroupProjectFall2022

To run all feature files: npm run test

To run all alertbox feature files: npm run testalert
To run all items feature files: npm run testitems
To run all shoppingcart feature files: npm run testshopping
To run all Things on display  feature files: npm run testthings

*** TO RUN ON BSTACK  ENTER CREDENTIALS IN config\wdio.conf-BSTACK.js and ad "bs" to the command e.g. "npm run testbs"

To run a specific feature file: npx wdio run wdio.conf.js --spec ./features-file-relative-path
eg:
    npx wdio run wdio.conf.js --spec ./features/Facebook/login.feature

To run a specific tag: npx wdio wdio.conf.js --cucumberOpts.tagExpression='@tag1'
eg:
    npx wdio wdio.conf.js --cucumberOpts.tagExpression='@
    npx wdio wdio.conf.js --cucumberOpts.tagExpression='@login-2 or @login-3'
    npx wdio wdio.conf.js --cucumberOpts.tagExpression='@login-2 and @sanity'
    npx wdio wdio.conf.js --cucumberOpts.tagExpression='not @login-1'

    To generate Allure report:
    allure generate --clean <allure-results-path>
    eg: allure generate --clean ./reports/allure-results/

To open allure report:
    allure open
    Note: make sure to be in the folder which contains allure-report


Examples:

npx wdio config/wdio.conf-bstk.js --cucumberOpts.tagExpression '@test'
npx wdio config/wdio.conf.js --cucumberOpts.tagExpression '@all'
npx wdio config/wdio.conf-bstk.js --cucumberOpts.tagExpression '@all'
npx wdio config/wdio.conf.js --cucumberOpts.tagExpression '@test'