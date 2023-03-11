export interface Definition {
  note?: string;
  partOfSpeech: string;
  source: string;
  text: string;
}

export interface Example {
  id: number;
  text: string;
  title: string;
  url: string;
}

export interface Word {
  word: string;
  _id: string;
  note?: string;
  publishDate: string;
  htmlExtra?: string;
  definitions: Definition[];
  examples: Example[];
}
