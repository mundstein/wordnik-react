import * as React from 'react';
import './style.css';

export default function Heading() {
  return (
    <div>
      <h1>Wordnik!</h1>
      <p>
        A demo of the{' '}
        <a href="https://wordnik.com" target="_blank">
          Wordnik
        </a>{' '}
        API.
      </p>
    </div>
  );
}
