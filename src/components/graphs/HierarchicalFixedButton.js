import React from 'react';
import { Button } from 'antd';

const HierarchicalFixedButton = ({ onClick }) => {
  return (
    <Button className="fixed-segment-btn" onClick={onClick}>
       Hierarchical Segments
      </Button>
  );
};

export default HierarchicalFixedButton;
