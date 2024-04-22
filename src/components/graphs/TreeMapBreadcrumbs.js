import React from 'react';
import Breadcrumb from './Breadcrumb';

const TreeMapBreadcrumbs = (props) => {
  const { treeInfo,rootValue } = props;
  const lastIndex = treeInfo.length - 1;
  const breadcrumbsToShow = treeInfo.length === 0 ? [{ text: rootValue }] : treeInfo;

  return (
    <div className={props.className}>
      {breadcrumbsToShow.map((info, index) => (
        <React.Fragment key={info.text}>
          {index !== 0}
          {breadcrumbsToShow.length > 1 ? (
            <Breadcrumb
              className={index === 0 ? 'root-breadcrumb' : ''}
              onClick={props.onItemClick}
              info={info}
              isLast={index === lastIndex}
            />
          ) : (
            <span className={index === 0 ? 'root-breadcrumb' : ''}>{info.text}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TreeMapBreadcrumbs;
