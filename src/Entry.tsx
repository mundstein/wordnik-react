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
      <p className="date">Word of the Day {w.publishDate.substring(0, 10)}</p>
    </div>
  );
}
