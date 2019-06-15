// Post Actions script for react/typescript dotnet template. 
// Initializes git repo (if not within current git repo) and creates client react/typescript app.

const execSync = require('child_process').execSync;

function isInGitRepository() {
    try {
        execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}

function shouldUseYarn() {
    try {
        execSync('yarnpkg --version', { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}

if (!isInGitRepository()) {
    console.log(`\nInitializing git repo...`);
    execSync('git init', { stdio: 'ignore' });
}

console.log(`\nCreating react app using CRA...`);
if (shouldUseYarn()) {
    execSync('yarn create react-app client-app --scripts-version file:template-scripts/react-scripts/ --typescript', { stdio: 'inherit' });
} else {
    execSync('npm init react-app client-app --scripts-version file:template-scripts/react-scripts/ --typescript', { stdio: 'inherit' });
}

console.log(`\nCommitting generated project...`);
execSync('git add .', { stdio: 'ignore' });
execSync('git reset template-scripts/', { stdio: 'ignore' });
execSync('git commit -m "Dotnet project and react-app created by template from https://github.com/karlandin/dotnet-cra."', { stdio: 'ignore' });

console.log(`\nSetup script done.\n`);