import { ChangeEvent, FormEvent } from "react"
import {User} from "../types/user"

type Props = {
  formData: Omit<User, 'id'>,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement| HTMLSelectElement>) => void,
  onSubmit: (e: FormEvent) => void,
  onSkillChange: (skill: string) => void,
  onClear: () => void,
  editId: number
}

const UserForm = ({formData, onChange,onSkillChange, onClear, onSubmit, editId}: Props) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname} 
            onChange={onChange}
            required
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <label>Education</label>
          <select
          name="education"
            value={formData.education}
            onChange={onChange}
          >
            <option value="Grade school">Grade school</option>
            <option value="high school">High school</option>
            <option value="college">College</option>
          </select>
        </div>

        <div>
          <label>Gender</label>
          <div>
            {['Male', 'Female', 'other'].map((gender) => (
              <label key={gender}>
                <input
                  type="radio"
                  name="gender"
                  value={formData.gender}
                  onChange={onChange}
                />
                <span>{gender}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Skills</label>
          <div>
            {['TypeScript', 'React', 'Node', 'NoSQL'].map((skill) => (
              <label key={skill}>
                <input
                  name="skills"
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() => onSkillChange(skill)}
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Bio</label>
          <textarea
          name="bio"
            value={formData.bio}
            onChange={onChange}
            rows={4}
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
          >
          {editId ? "Save Changes" : "Add User"}
          </button>
          <button
          type="button"
          onClick={onClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}


export default UserForm

