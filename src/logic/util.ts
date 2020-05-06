/**
 * 最小値から最大値の範囲の整数をランダムに生成して返します。
 * @param min 最小値
 * @param max 最大値
 */
export function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/**
 * 数値xとyの組み合わせがstoreに格納済か否かを判定して返します。
 * @param inputs
 * @param store
 */
export function isStored(inputs: IxAndY, store: IxAndY[]): boolean {
  store.forEach((rec) => {
    const isSrtored = rec.x === inputs.x && rec.y === inputs.y;
    if (isSrtored) return true;
  });
  return false;
}

/**
 * 数値xとyの組み合わせ
 */
export interface IxAndY {
  x: number;
  y: number;
}
