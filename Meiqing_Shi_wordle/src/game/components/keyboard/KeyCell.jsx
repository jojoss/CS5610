// import React from 'react';

// const KeyCell = ({ letter, onKeyClick }) => {
//   return (
//     <button onClick={() => onKeyClick(letter)}>
//       {letter}
//     </button>
//   );
// };

// export default KeyCell;

import React from 'react';

const KeyCell = ({ letter, onKeyClick, onEnter }) => {
  // 确保你有一个条件来检查是否是ENTER键被点击
  const handleClick = () => {
    if (letter === 'ENTER') {
      onEnter && onEnter(); // 这里调用onEnter
    } else {
      onKeyClick && onKeyClick(letter); // 其他情况调用onKeyClick
    }
  };

  return (
    <button onClick={handleClick}>
      {letter}
    </button>
  );
};

export default KeyCell;