// Reusing types
export type NameType = {
  first: string;
  last: string;
};

// Object props & exporting types
export type PersonProps = {
  // Type reused | extended
  name: NameType;
};
