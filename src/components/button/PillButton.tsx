import { ButtonHTMLAttributes, useState } from 'react';

import { Modify } from '@/typings/typeHelper';

import Button from './Button';

export type PillButtonProps<T> = {
  buttonData: Modify<
    ButtonHTMLAttributes<T>,
    {
      text: string;
    }
  >[];
};

const PillButton: React.FC<PillButtonProps<any>> = ({ buttonData }) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div style={{ display: 'flex' }}>
      {buttonData.map((data, index) => (
        <Button onClick={() => setIsActive(index)} variant={index === isActive ? 'primary' : 'secondary'}>
          {data.text}
        </Button>
      ))}
    </div>
  );
};

export default PillButton;
