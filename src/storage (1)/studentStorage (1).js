export const saveStudent = (student) => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    stored.push(student);
    localStorage.setItem('students', JSON.stringify(stored));
  };
  

  export const getEnrolledStudents = () => {
    return JSON.parse(localStorage.getItem('students')) || [];
  };
  

  export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  };
  