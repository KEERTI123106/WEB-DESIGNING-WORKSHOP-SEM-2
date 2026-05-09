function Props({name, course, marks }){
  return (
    <div className="caed">
      <div className="name">Name: {name}</div>
      <div className="info">Course: {course}</div>
      <div className="info">Marks: {marks}</div>
    </div>
  );
}
export default Props
