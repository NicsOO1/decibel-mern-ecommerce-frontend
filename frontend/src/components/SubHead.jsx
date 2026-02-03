import React from "react";

const SubHead = ({head, sub}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="hh1 font-medium text-4xl">{head}</h1>
      <p className="text-lg text-gray-500">{sub}</p>
    </div>
  );
};

export default SubHead;
