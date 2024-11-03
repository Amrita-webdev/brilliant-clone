export interface UserDetails {
  email: string;
  firstName?: string;
  currentCourse?: Course;
}

export interface Course {
  id: string;
  title: string;
  category: 'Math' | 'Data' | 'Computer Science' | 'Science';
  isNew: boolean;
  image: string;
  progress?: number;
}
