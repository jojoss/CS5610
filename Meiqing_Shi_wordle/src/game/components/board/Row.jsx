import React from 'react';
import Cell from './Cell';

const Row = ({ letters, clues }) => {
  // return (
  //   <div className="row">
  //     {letters.map((letter, index) => (
  //       <Cell key={index} letter={letter} />
  //     ))}
  //   </div>
  // );
  return (
    <div className="row">
      {letters.map((letter, index) => {
        // 打印每个 Cell 的颜色状态
        // console.log(`Letter: ${letter}, Color: ${clues[index].color}`);
        return <Cell key={index} letter={letter} status={clues[index].status} />;
      })}
    </div>
  );

};

export default Row;