module.exports = {
  title: "AMP",
  icon: "icon.webp",
  description: "Amp is a frontier coding agent for your terminal and editor, built by Sourcegraph",
  link: "https://ampcode.com/manual",
  install: [{
    method: "shell.run",
    params: {
      message: "npm install -g @sourcegraph/amp@latest"
    }
  }],
  uninstall: [{
    method: "shell.run",
    params: {
      message: "npm uninstall -g @sourcegraph"
    }
  }],
  update: [{
    method: "shell.run",
    params: {
      message: "git pull",
    }
  }, {
    method: "shell.run",
    params: {
      message: "npm install -g @sourcegraph/amp@latest"
    }
  }],
  run: [{
    when: "{{platform === 'win32'}}",
    method: "shell.run",
    params: {
      shell: "{{kernel.path('bin/miniconda/Library/bin/bash.exe')}}",
      message: "amp",
      path: "{{args.cwd}}",
      input: true
    }
  }, {
    when: "{{platform !== 'win32'}}",
    id: "run",
    method: "shell.run",
    params: {
      message: "amp",
      path: "{{args.cwd}}",
      input: true
    }
  }]
}
