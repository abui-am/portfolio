import * as React from 'react';

function Ornament({ fill = '#E2E2E2', ...props }) {
  return (
    <svg width={120} height={48} viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={6} cy={6} r={6} fill={fill} />
      <circle cx={24} cy={6} r={6} fill={fill} />
      <circle cx={42} cy={6} r={6} fill={fill} />
      <circle cx={60} cy={6} r={6} fill={fill} />
      <circle cx={78} cy={6} r={6} fill={fill} />
      <circle cx={96} cy={6} r={6} fill={fill} />
      <circle cx={114} cy={6} r={6} fill={fill} />
      <circle cx={6} cy={24} r={6} fill={fill} />
      <circle cx={24} cy={24} r={6} fill={fill} />
      <circle cx={42} cy={24} r={6} fill={fill} />
      <circle cx={60} cy={24} r={6} fill={fill} />
      <circle cx={78} cy={24} r={6} fill={fill} />
      <circle cx={96} cy={24} r={6} fill={fill} />
      <circle cx={114} cy={24} r={6} fill={fill} />
      <circle cx={6} cy={42} r={6} fill={fill} />
      <circle cx={24} cy={42} r={6} fill={fill} />
      <circle cx={42} cy={42} r={6} fill={fill} />
      <circle cx={60} cy={42} r={6} fill={fill} />
      <circle cx={78} cy={42} r={6} fill={fill} />
      <circle cx={96} cy={42} r={6} fill={fill} />
      <circle cx={114} cy={42} r={6} fill={fill} />
    </svg>
  );
}

export default Ornament;
