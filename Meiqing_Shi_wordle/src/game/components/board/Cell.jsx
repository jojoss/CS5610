import React from 'react';

const Cell = ({ letter, status }) => {
  
  // console.log(`Cell - Letter: ${letter}, Status: ${status}`); // 添加日志输出

  const statusToColor = {
    correct: 'green', // 如果字母位置正确
    present: 'yellow', // 如果字母存在但位置不正确
    absent: 'grey', // 如果字母不存在
  };

  const backgroundColor = statusToColor[status] || 'transparent';

  const style = {
    backgroundColor,
  };

  return (
    <div className="cell" style={style}>
      {letter.toUpperCase()}
    </div>
  );
};

export default Cell;