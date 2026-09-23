import { spawn } from 'node:child_process';
import { copyFileSync } from 'node:fs';

copyFileSync('index.dev.html', 'index.html');

const vite = spawn('vite', ['--host', '127.0.0.1'], {
    stdio: 'inherit',
    shell: true,
});

vite.on('exit', (code, signal) => {
    if (signal) {
        process.kill(process.pid, signal);
    } else {
        process.exit(code ?? 0);
    }
});
