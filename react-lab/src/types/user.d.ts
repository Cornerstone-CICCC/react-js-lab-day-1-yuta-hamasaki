export type User = {
  id: number,
  fullname: string;
  age: number;
  education: 'Grade school' | 'high school' | 'college';
  gender: 'Male' | 'Female' | 'other';
  skills: string[];
  bio: string;
}