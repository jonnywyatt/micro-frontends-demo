/*
Copy this file to the folder one level above the repos, then run with 'pm2 start pm2-marketplace.config.js'
 */
module.exports = {
	apps: [
		{
			name: "service-parent",
			script: "npm",
      args: "start",
      cwd: "./service-parent",
      watch: ['src']
		},
    {
      name: "service-child",
      script: "npm",
      args: "start",
      cwd: "./service-child",
      watch: ['src']
    },
    {
      name: "service-child-2",
      script: "npm",
      args: "start",
      cwd: "./service-child-2",
      watch: ['src']
    },
    {
      name: "service-child-3",
      script: "npm",
      args: "start",
      cwd: "./service-child-3",
      watch: ['src']
    }
	]
};
