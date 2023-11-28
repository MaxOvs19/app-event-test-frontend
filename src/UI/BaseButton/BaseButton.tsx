import React from 'react';

import './BaseButton.scss';
interface IProps {
  children: any;
  styles?: string;
}

const BaseButton = ({ children, styles }: IProps) => {
  return <button className={styles ? `base-button ${styles}` : 'base-button'}>{children}</button>;
};

export default BaseButton;
