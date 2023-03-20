import * as React from 'react';
import './style.css';
import { Word } from './Models';

export default function Entry(props: any) {
  const w = props as Word;

  return (
    <div id="entry">
      <div id="word">{w.word}</div>
      <div id="definition">
        {w.definitions.map((d, idx) => {
          return (
            <p key={idx}>
              <span className="part-of-speech">{d.partOfSpeech}</span>:{' '}
              {d.text}
            </p>
          );
        })}
      </div>
      <div className="note">
        <p>{w.note}</p>
      </div>
      <div id="example">
        <h5>Examples</h5>
        {w.examples.map((e, idx) => {
          return (
            <p key={idx}>
              {e.text}{' '}
              <span className="exampleTitle">{e.title}</span>&nbsp;
              {renderSource(e)}
            </p>
          );
        })}
      </div>
      <p className="date">Word of the Day {w.publishDate.substring(0, 10)}</p>
    </div>
  );
}

function renderSource(example: any) {
  const FRAGMENT = "http://api.wordnik.com/v4/mid";
  if (example.url == undefined || example.url.includes(FRAGMENT)) {
    return 
  }
  else {
    return <a href={example.url} className="source" target="_blank">Source</a>
  }
}
