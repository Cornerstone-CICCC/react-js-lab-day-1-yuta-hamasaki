import { User } from "../types/user"

type Props = {
  user: User | null
}

const UserProfile = ({ user }: Props) => {
  if (!user) return null

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <div>
          <label>Full Name:</label>
          <p>{user.fullname}</p>
        </div>
        <div>
          <label>Age:</label>
          <p>{user.age}</p>
        </div>
        <div>
          <label>Education:</label>
          <p>{user.education}</p>
        </div>
        <div>
          <label>Gender:</label>
          <p>{user.gender}</p>
        </div>
        <div>
          <label>Skills:</label>
          <p>{user.skills.join(', ')}</p>
        </div>
        <div>
          <label>Bio:</label>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile