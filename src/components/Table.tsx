type Props<T> = {
  columns: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export default function Table<T>({ columns, data, renderRow }: Props<T>) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>{columns.map(c => <th key={c}>{c}</th>)}</tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
}
