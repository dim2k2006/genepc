#!/usr/bin/env node

import commander from 'commander';
import chalk from 'chalk';
import clipboard from 'clipboardy';
import eanToEpc from '../src/index';

const { program } = commander;

program
  .version('1.0.0')
  .description('Generates EPC from EAN.')
  .arguments('<ean>')
  .action((ean: string) => {
    try {
      const epc = eanToEpc(ean);

      clipboard.writeSync(epc);

      console.log(chalk.green(`EPC: ${epc} is in your clipboard. `));
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.error(chalk.red(error.message));

      process.exit(1);
    }
  });

program.parse(process.argv);
