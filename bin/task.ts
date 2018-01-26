import chalk from 'chalk'

export default function run(task, action, ...args) {
  const command = process.argv[2]
  const taskName = command && !command.startsWith('-') ? `${task}:${command}` : task
  const start = new Date()
  process.stdout.write(chalk.yellow(`Starting task: '${taskName}'...\n`))
  return Promise.resolve().then(() => action(...args)).then(() => {
    process.stdout.write(chalk
      .green(`Finished task: '${taskName}' after ${new Date().getTime() - start.getTime()}ms\n`))
  }, (err) => process.stderr.write(chalk.red(`${err.stack}\n`)))
}
