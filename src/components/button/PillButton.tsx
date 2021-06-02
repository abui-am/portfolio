import { ButtonHTMLAttributes, useEffect, useState } from 'react';

import { Modify } from '@/typings/typeHelper';

import Button from './Button';

export type PillButtonProps<T> = {
  onClick: (val: button<T>) => void;
  buttonData: button<T>[];
};

export type button<T> = Modify<
  ButtonHTMLAttributes<T>,
  {
    text: string;
    value: string;
  }
>;

const PillButton: React.FC<PillButtonProps<unknown>> = ({ buttonData, onClick = () => '' }) => {
  const [isActive, setIsActive] = useState(0);
  const getBorder = (index: number, max: number) => {
    switch (index) {
      case 0:
        return '4px 0px 0px 4px';
      case max:
        return '0px 4px 4px 0px';
      default:
        return '0px';
    }
  };

  useEffect(() => {
    onClick(buttonData[isActive]);
  }, [buttonData, isActive, onClick]);

  return (
    <div style={{ display: 'flex' }}>
      {buttonData.map((data, index) => {
        const borderRadius = getBorder(index, buttonData.length - 1);
        return (
          <Button
            key={data.text}
            onClick={() => setIsActive(index)}
            style={{ borderRadius }}
            variant={index === isActive ? 'primary' : 'secondary'}
          >
            {data.text}
          </Button>
        );
      })}
    </div>
  );
};

export default PillButton;
