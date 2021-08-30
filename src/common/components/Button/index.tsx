import React from 'react';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label = '',
  ...props
}) => {
  const getColor = () => {
    switch (variant) {
      case 'primary':
        return 'red';
      case 'secondary':
        return 'blue';
      default:
        return 'black';
    }
  };
  const getSize = () => {
    switch (size) {
      case 'small':
        return 12;
      case 'medium':
        return 16;
      case 'large':
        return 20;
      default:
        return 12;
    }
  };
  return (
    <button
      style={{ backgroundColor, fontSize: `${getSize()}px`, color: getColor() }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
