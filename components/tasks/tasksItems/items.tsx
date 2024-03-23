import React from "react";

interface Context {
  title: string;
  description: string;
  date: string;
}

function formatDate(date: string): string {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function Items({ title, description, date }: Context) {
  return (
    <>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p>
        <em>{description}</em>
      </p>
      <p className="mt-2">{formatDate(date)}</p>
    </>
  );
}

export default Items;
