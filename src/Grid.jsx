import { range } from './utils';
import './Grid.css';
function Grid({ numRows, numCols }) {
  const content = range(numRows, numCols ?? null);
  return <div className="grid">{content}</div>;
}

export default Grid;
