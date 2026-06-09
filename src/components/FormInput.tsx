type Props = {
  label: string;
  name: string;
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
};

export default function FormInput({ label, name, value, type = 'text', onChange, textarea = false }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {textarea
        ? <textarea className="form-control" name={name} value={value} onChange={onChange} />
        : <input className="form-control" name={name} type={type} value={value} onChange={onChange} />}
    </div>
  );
}
