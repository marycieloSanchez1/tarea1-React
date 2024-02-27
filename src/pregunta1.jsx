
export const ColorChanger = (props) => {
  const squareStyle = {
    width: '100px', 
    height: '100px',
    backgroundColor: props.colorProps, 
  };

  return (
    <div className="color-changer">
      <div className="color-square" style={squareStyle}></div>
      <p>{props.colorProps}</p>
    </div>
  );
};


