import { useState } from 'react';

const FilteredSelect = () => {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Orange'];
  const [input, setInput] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    
    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type to filter"
      />
      <ol>
        {filteredOptions.map((option, index) => (
          <li key={index} value={option}>
            {option}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FilteredSelect;