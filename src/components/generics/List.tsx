// * This types can vary, Generics will help us "T" - parameterised types.

import { ReactNode } from "react";

// *  T is a kind of convention & it stands for types.
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number | string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h1>List of items</h1>
      {items.map((item: any, i) => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
