import * as React from 'react';
import { PlaySansu } from '../containers/play';

export function Play() {
  return (
    <div>
      <PlaySansu />
    </div>
  );
}

//ページの中身用のコンポーネントを作成
export const topPage = () => (
  <div>
    <h1>Top Page</h1>ここがトップページです
  </div>
);

export const page2 = () => (
  <div>
    <h1>page2</h1>
  </div>
);

export const page3 = () => (
  <div>
    <h1>page3</h1>
  </div>
);
