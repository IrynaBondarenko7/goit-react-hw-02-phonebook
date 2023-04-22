export const Filter = ({ filter, searchContact }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={searchContact} />
    </label>
  );
};
