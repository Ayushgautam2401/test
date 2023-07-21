import React, { useState } from 'react';
import Select from 'react-select';

interface OptionType {
  value: string;
  label: string;
  isChecked: boolean;
}

const options: OptionType[] = [
  { value: 'option1', label: 'Option 1', isChecked: false },
  { value: 'option2', label: 'Option 2', isChecked: false },
  { value: 'option3', label: 'Option 3', isChecked: false },
  // Add more dummy options here
];

const MultiSelectDropdown: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  
  const handleChange = (selected: any) => {
    if (selected) {
      const updatedOptions = options.map((option) => {
        if (selected.find((selectedOption: OptionType) => selectedOption.value === option.value)) {
          return { ...option, isChecked: true };
        }
        return { ...option, isChecked: false };
      });
      setSelectedOptions(updatedOptions);
    }
  };
  
  
  
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '300px', // Adjust the width as per your requirements
    }),
  };

  return (
    <Select
      options={options}
      isMulti
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      onChange={handleChange}
      value={selectedOptions.filter((option) => option.isChecked)}
      styles={customStyles}
      placeholder="Select options"
      closeMenuOnSelect={false}
      components={{
        Option: (props: any) => (
          <div>
            <input
              type="checkbox"
              checked={props.data.isChecked}
              onChange={() => handleChange([...selectedOptions, props.data])}
            />
            <label>{props.data.label}</label>
          </div>
        ),
      }}
    />
  );
};

export default MultiSelectDropdown;
