module.exports = {
  apps: [
    {
      name: 'nidejia-prototype',
      script: 'node_modules/next/dist/bin/next',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};