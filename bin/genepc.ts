#!/usr/bin/env node

import commander from 'commander';
import chalk from 'chalk';
import clipboard from 'clipboardy';
import emoji from 'node-emoji';
import eanToEpc from '../src/index';

const genEmojis = (count: number) => {
  const result = [...new Array(count)].map(() => emoji.random().emoji).join('');

  return result;
};

const { program } = commander;

program
  .version('1.0.0')
  .description('Generates EPC from EAN.')
  .arguments('<ean>')
  .action((ean: string) => {
    try {
      const epc = eanToEpc(ean);

      clipboard.writeSync(epc);

      const emojis = genEmojis(3);

      console.log(chalk.green(`EPC: ${epc} is in your clipboard. ${emojis}`));
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.error(chalk.red(error.message));

      process.exit(1);
    }
  });

program.parse(process.argv);
