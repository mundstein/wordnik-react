import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { getWord } from './lib/wordnik';
import { Word } from './Models';
import { from } from 'rxjs';
import Heading from './Heading';
import Button from './Button';
import Entry from './Entry';
import { useState } from 'react';

export default function App() {
  const [appState, setAppState] = useState({
    word: undefined,
    loading: false,
    error: undefined,
  } as AppState);

  return (
    <div>
      <div id="container" className="mt-3">
        <Heading />
        <div id="buttons">
          <Button title="Word of the Day" click={() => fetchWord()} />
          <br />
          <Button
            title="Random Word"
            click={() => fetchWord(true)}
            class="mt-3"
            color="secondary"
          />
        </div>
      </div>
      {renderWord()}
    </div>
  );

  async function fetchWord(rnd = false) {
    setAppState({ loading: true });
    from(getWord(rnd)).subscribe({
      next: (res) =>
        setAppState({ word: res as Word, error: undefined, loading: false }),
      error: (err) => setAppState({ word: undefined, error: err, loading: false }),
    });
  }

  function renderWord() {
    if (appState.word != undefined) {
      return <Entry {...appState.word} />;
    }
    if (appState.error != undefined) {
      return <pre>{appState.error.message}</pre>;
    }
  }
}

interface AppState {
  word?: Word;
  loading: boolean;
  error?: Error;
}
