export const range = (start, end = 0, step = 1) => {
  let output = [];
  const columns = [];
  if (!end) end = start;

  for (let i = 1; i <= end; i++) {
    columns.push(<div key={`cell${i}`} className="cell"></div>);
  }

  for (let i = 1; i <= start; i++) {
    output.push(
      <div key={`row${i}`} className="row">
        {columns}
      </div>
    );
  }

  return output;
};
