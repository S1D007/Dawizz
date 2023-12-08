const { spawn } = require('child_process');

const backendProcess = spawn('npm', ['run', 'backend'], {
  cwd: 'packages/voluble-backend',
  stdio: 'inherit',
});

const frontendProcess = spawn('npm', ['run', 'frontend'], {
  cwd: 'packages/voluble-frontend',
  stdio: 'inherit',
});
