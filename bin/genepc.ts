#!/usr/bin/env node

import commander from 'commander';
import chalk from 'chalk';
import eanToEpc from '../src/index';

const { program } = commander;

program
  .version('1.0.0')
  .description('Generates EPC from EAN.')
  .arguments('<ean>')
  .action((ean: string) => {
    try {
      const epc = eanToEpc(ean);

      console.log(chalk.green('EPC:', epc));
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.error(chalk.red(error.message));

      process.exit(1);
    }
  });

program.parse(process.argv);
