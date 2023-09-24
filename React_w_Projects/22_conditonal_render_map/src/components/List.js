const List = ({ items, layout }) => {
  let style = "circle";
  switch (layout) {
    case "numbered":
      style = "upper-roman";
      break;
    case "alpha":
      style = "lower-alpha";
      break;
    default:
      style = "circle";
  }
  return (
    <ul style={{ listStyleType: style }}>
      {items.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
};
export default List;
