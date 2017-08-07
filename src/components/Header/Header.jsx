// @flow
import React from 'react';
import glamorous from 'glamorous';

import { hexOrColor, readableTextColor } from '../../utils/color';

import HeaderItem from './Item/HeaderItem';
import HeaderTitle from './Title/HeaderTitle';
import HeaderSeparator from './Separator/HeaderSeparator';

const Header = ({
  className,
  children,
}: {
  className: string,
  children: mixed,
}): React$Element<*> =>
  (<div className={className}>
    {children}
  </div>);

const style = ({ theme, color }: { theme: THEME, color: string }): {} => {
  const backgroundColor = hexOrColor(color)(theme.colors ? theme.colors[color] : 'white');

  return {
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing / 2}px ${theme.spacing}px`,
    backgroundColor,
    color: readableTextColor(backgroundColor)(['black', 'white']),
  };
};

export default glamorous(Header)(style);
export { HeaderItem, HeaderSeparator, HeaderTitle };
