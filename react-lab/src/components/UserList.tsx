import { User } from "../types/user"

type Props = {
  user: User,
  onDelete: (id: number) => void,
  onEdit: (id: number) => void,
  onView: (id: number) => void,

}
const UserList = ({user, onDelete, onEdit, onView}: Props) => {
  return (
    <div   
    style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "10px",
      textAlign: "center",
    }}>
      <p>{user.id}</p>
      <h2>{user.fullname}</h2>
      <button onClick={() => onView(user.id)}>View</button>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  )
}

export default UserList
