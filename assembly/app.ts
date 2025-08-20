import { i32ToBytes, bytesToI32 } from './utils';

/**
 * Always returns the minimum even prime (2).
 */
function minEvenPrime(_n: i32): i32 {
  return 2; // the only even prime
}

/**
 * Main function of your contract
 * @dev Receives the input of bytes in Uint8Array. Result must also be sent in bytes wrapped in Uint8Array
 *
 * @param input bytes in Uint8Array
 * @returns bytes in Uint8Array
 */
export const main = (input: Uint8Array): Uint8Array => {
  const _ = bytesToI32(input); // input is unused but parsed for consistency
  const result = minEvenPrime(_);
  return i32ToBytes(result);
};
