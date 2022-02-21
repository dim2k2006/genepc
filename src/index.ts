// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tds from 'epc-tds';
import padStart from 'lodash/padStart';

const eanLength = 14;

const eanToEpc = (ean: string): string => {
  const newEan = padStart(ean, eanLength, '0');

  const epc = new tds.Sgtin96().setGtin(newEan);

  return epc.toHexString();
};

export default eanToEpc;
