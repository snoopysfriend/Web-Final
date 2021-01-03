import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import gridStyles from './grid.module.scss';
import { SIZES, VARIANTS } from '../constants';


const Grid = ({ children, size, variant, noBackground, container, rowFlex, fullWidth, className, forwardedRef, ...props }) => {
  const classes = [gridStyles.root];
  classes.push(className);
  if (noBackground) classes.push(gridStyles.noBackground);
  if (size) {
    classes.push(gridStyles[size]);
  }
  if (variant) {
    classes.push(gridStyles[variant]);
  }
  if (container) {
    classes.push(gridStyles.container);
  }
  if (rowFlex) {
    classes.push(gridStyles.rowFlex)
  }
  if (fullWidth) {
    classes.push(gridStyles.fullWidth);
  }
  console.log('container', container);

  return (
    <div fullWidth={fullWidth} ref={forwardedRef} 
        className={classes.join(' ')} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  fullWidth: PropTypes.bool,
  container: PropTypes.bool,
  className: PropTypes.string,
};

export default React.forwardRef((props, ref) => <Grid {...props} forwardedRef={ref} />);