type TitleProps = {
  type: "bold" | "normal";
  name: string;
};
const Title = ({ type, name }: TitleProps) => {
  return (
    <div>
      <h1 style={{ fontWeight: (type = "bold") }}>{name}</h1>
    </div>
  );
};

export default Title;
