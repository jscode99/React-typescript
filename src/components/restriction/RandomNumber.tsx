type RandomNumberType = {
  value: number;
};

type PositiveOnly = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeOnly = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroOnly = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveOnly | NegativeOnly | ZeroOnly;

export default function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "IsPositive"} {isNegative && "IsNegative"}{" "}
      {isZero && "IsZero"}
    </div>
  );
}
