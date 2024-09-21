const User = function (props) {
  return (
    <>
      <div>
        {props.user.age}살-{props.user.name}
      </div>
      <button onClick={() => props.handleDelete(props.user.id)}>
        삭제하기
      </button>
    </>
  );
};

export default User;
