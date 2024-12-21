import { ChangeEvent, FormEvent, useState } from "react"
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import { User } from "./types/user"

const App = () => {
  const [users, setUser] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    fullname: "",
    age: 20,
    education: 'Grade school',
    gender: 'Male',
    skills: [],
    bio: "",
  })

  const [editId, setEditId] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSkillChange = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleClear = () => {
    setFormData({
      fullname: "",
      age: 20,
      education: 'Grade school',
      gender: 'Male',
      skills: [],
      bio: "",
    })
    setEditId(0)
    setSelectedUser(null)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (editId) {
      setUser(prev => (
        prev.map(user => (
          user.id === editId ? { ...user, ...formData } : user
        ))
      ))
      setEditId(0)
    } else {
      setUser(prev => ([
        ...prev,
        { id: prev.length + 1, ...formData }
      ]))
    }
    handleClear()
  }

  const handleEdit = (id: number) => {
    const user = users.find(user => user.id === id)
    if (user) {
      setFormData({
        fullname: user.fullname,
        age: user.age,
        education: user.education,
        gender: user.gender,
        skills: user.skills,
        bio: user.bio
      })
      setEditId(user.id)
      setSelectedUser(null)
    }
  }

  const handleDelete = (id: number) => {
    setUser(prev => prev.filter(user => user.id !== id))
    if (selectedUser?.id === id) {
      setSelectedUser(null)
    }
    if (editId === id) {
      handleClear()
    }
  }

  const handleView = (id: number) => {
    const user = users.find(user => user.id === id)
    if (user) {
      setSelectedUser(user)
    }
  }

  return (
    <div>
      <UserForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onSkillChange={handleSkillChange}
        onClear={handleClear}
        editId={editId}
      />

      <div>
        <h2 >User List</h2>
        {users.map(user => (
          <UserList
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onView={handleView}
          />
        ))}
      </div>

      {selectedUser && <UserProfile user={selectedUser} />}
    </div>
  )
}

export default App