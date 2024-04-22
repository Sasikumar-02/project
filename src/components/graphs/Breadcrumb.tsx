import React from 'react';

const Breadcrumb = (props:any) => {
  const { info, isLast } = props;

  const onClick = () => {
    props.onClick(info.node);
  };

  return (
    <span>
      <span className={info.node ? 'link' : ''} onClick={onClick}>
        {info.text}
      </span>
      {isLast ? '' : ''}
    </span>
  );
};

export default Breadcrumb;
