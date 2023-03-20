import * as React from 'react';
import './style.css';
import { getWord } from './lib/wordnik';
import { Word } from './Models';
import { from } from 'rxjs';
import Heading from './Heading';
import Entry from './Entry';
import { useState } from 'react';
import { Spinner, Button } from 'react-bootstrap'

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
          <Button 
            variant="primary"
            size="lg"
            onClick={() => fetchWord()}
            className="actionButton">
            Word of the Day
          </Button>
          <br />
          <Button 
            variant="secondary"
            onClick={() => fetchWord(true)}
            size="lg"
            className="actionButton">
            Random Word
          </Button>
          <div>{renderLoading()}</div>
        </div>
      </div>
      {renderWord()}
    </div>
  );

  async function fetchWord(rnd = false) {
    setAppState({ loading: true });
    from(getWord(rnd)).subscribe({
      next: (res) => {
        console.log(res)
        setAppState({ word: res as Word, error: undefined, loading: false })
      },
      error: (err) => setAppState({ word: undefined, error: err, loading: false }),
    });
  }

  function renderLoading() {
    if (appState.loading) {
      return <Spinner className="spinner" color="primary"/>
    }
  }

  function renderWord() {
    if (appState.word != undefined) {
      return <Entry {...appState.word} />;
    }
    if (appState.error != undefined) {
      return <pre className="error">{appState.error.message}</pre>;
    }
  }
}

interface AppState {
  word?: Word;
  loading: boolean;
  error?: Error;
}
