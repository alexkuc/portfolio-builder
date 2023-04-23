import { useEffect, useState } from 'react';
import './password.scss';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  hash: string;
  disabled?: boolean | undefined;
};

type State = string | null;

const Password = ({ children, hash, disabled }: Props) => {
  if (!disabled) disabled = false;

  const [attempt, setAttempt] = useState<State>(null);
  const [unlocked, setUnlocked] = useState(disabled);

  const promptPass = () => {
    setAttempt(window.prompt('Please enter password'));
  };

  useEffect(() => {
    !disabled && promptPass();
  }, []);

  useEffect(() => {
    if (!attempt) return;
    digestMessage(attempt).then((h) => {
      if (h === hash) setUnlocked(true);
      if (h !== hash) promptPass();
    });
  }, [attempt]);

  return <>{(unlocked || disabled) && children}</>;
};

type Algorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string
async function digestMessage(
  message: string,
  algorith?: Algorithm | undefined
) {
  if (!algorith) algorith = 'SHA-512';
  // encode as (utf-8) Uint8Array
  const msgUint8 = new TextEncoder().encode(message);
  // hash the message
  const hashBuffer = await crypto.subtle.digest(algorith, msgUint8);
  // convert buffer to byte array
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join(''); // convert bytes to hex string
  return hashHex;
}

export { Password };
