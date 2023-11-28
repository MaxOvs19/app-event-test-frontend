import React from 'react';

import './BaseButton.scss';
interface IProps {
  children: any;
  styles?: string;
  click?: () => void;
}

const BaseButton = ({ children, styles, click }: IProps) => {
  return (
    <button className={styles ? `base-button ${styles}` : 'base-button'} onClick={click}>
      {children}
    </button>
  );
};

export default BaseButton;
