import React from "react";

interface Context {
  title: string;
  text: string;
  date: string;
}

function Items({ title, text, date }: Context) {
  return (
    <>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p>
        <em>{text}</em>
      </p>
      <p className="mt-2">{date}</p>
    </>
  );
}

export default Items;
