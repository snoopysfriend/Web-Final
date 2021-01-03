import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styles from './grid.module.scss';
import { SIZES, VARIANTS } from '../constants';

const ALIGN = {
  RIGHT: 'right',
  LEFT: 'left',
};


const GridItem = ({ children, size, variant, alignRight, border, fullWidth, className, forwardedRef, ...props }) => {
  const gridItemStyles = [styles.gridItem];
  if (fullWidth) {
    gridItemStyles.push(styles.fullWidth);
  }
  if (border) {
    gridItemStyles.push(styles.border);
  }
  if (alignRight) {
    gridItemStyles.push(styles.alignRight);
  }
  
  gridItemStyles.push(className);

  return (
    <div fullWidth={fullWidth} ref={forwardedRef} className={gridItemStyles.join(' ')} {...props}>
      {children}
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default React.forwardRef((props, ref) => <GridItem {...props} forwardedRef={ref} />);