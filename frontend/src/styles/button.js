import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './constants';

/**
 * # Button
 * Simple Foodbomb Button Component
 *
 * ## Modifiers
 * ### Variants
 * ```
 * ['primary', 'seconday', 'danger', 'success', 'supplier', 'light_primary', 'light_secondary']
 * ```
 *
 * ### Sizes
 * ```
 * ['regular', 'large', 'small', 'extra_small']
 * ```
 *
 * ## PropTypes:
 * ```js
 *  FBButton.propTypes = {
 *    onClick: PropTypes.func,
 *    children: PropTypes.node.isRequired,
 *    size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
 *    variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
 *    fullWidth: PropTypes.bool,
 *    className: PropTypes.string,
 *  };
 * ```
 *
 * ## Example
 * ```js
 * <Button
 *   variant="priamry"
 *   onClick={handleClick}
 * >Sign In</Button>
 * ```
 */

const FBButton = ({ onClick, children, size, variant, fullWidth, className, forwardedRef, ...props }) => {
  const buttonStyles = [styles.FBButton];

  if (size) {
    buttonStyles.push(styles[size]);
  }

  if (variant) {
    buttonStyles.push(styles[variant]);
  }

  if (fullWidth) {
    buttonStyles.push(styles.fullWidth);
  }

  buttonStyles.push(className);

  return (
    <Button fullWidth={fullWidth} onClick={onClick} ref={forwardedRef} className={buttonStyles.join(' ')} {...props}>
      {children}
    </Button>
  );
};

FBButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default React.forwardRef((props, ref) => <FBButton {...props} forwardedRef={ref} />);