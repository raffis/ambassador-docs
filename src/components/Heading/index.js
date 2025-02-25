import React from 'react';

import Link from '../../../../src/components/Link';

import Icon from './icon.inline.svg';

// heading(n) takes an integer n in the range 1-6, and returns a React
// component for a heading of that level.
export const heading = (n) => {
  const Tag = `h${n}`;

  // Return a classical component rather than a functional component
  // because when a functional component is nested inside of another
  // function (as this is) various things (including ESLint and
  // sometimes React itself?) get confused in to thinking that it's a
  // hook/callback and not a component, and then error at you about
  // having broken the "Rules of Hooks"[1].
  //
  // [1]: https://reactjs.org/docs/hooks-rules.html
  class Heading extends React.Component {
    render() {
      let { children, ...props } = this.props;

      if (!props.id) {
        return <Tag {...props}>{children}</Tag>;
      }

      return (
        <Tag {...props}>
          <Link
            to={'#' + props.id}
            aria-label={props.id.split('-').join(' ')}
            className="anchor before"
          >
            <Icon loading='lazy'/>
          </Link>
          {children}
        </Tag>
      );
    }
  }

  return Heading;
};
