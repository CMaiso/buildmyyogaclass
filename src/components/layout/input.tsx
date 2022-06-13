const Input = (props: any) => {
  return (
    <div className="mt-4">
      <label className="font-semibold">Label</label>
      <input
        className="mt-2
        w-full
        rounded-md
        border
        border-gray-100 bg-gray-100
        px-4
        py-2
        placeholder-gray-600
        outline-none
        focus:border-gray-500 focus:bg-white focus:placeholder-gray-500"
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        name={props.name}
      />
      <div className="text-secondary mt-1 text-xs text-sm font-semibold">
        Error
      </div>
    </div>
  );
};

export default Input;
