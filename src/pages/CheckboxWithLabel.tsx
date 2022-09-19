import {useState} from 'react';

interface CheckBoxProps{
    labelOn: string
    labelOff: string
}

export default function CheckboxWithLabel({labelOn, labelOff}:CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}