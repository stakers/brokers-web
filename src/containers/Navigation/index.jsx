/* eslint-disable import/no-unresolved */
import React from 'react';
import CssModules from 'react-css-modules';
import styles from './styles.scss';

import TopNav from '../../components/TopNav';
import NavigationMenu from '../../components/NavigationMenu';

function Navigation() {
  return (
    <React.Fragment>
      <TopNav />
      <NavigationMenu />
    </React.Fragment>
  );
}

export default CssModules(Navigation, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
