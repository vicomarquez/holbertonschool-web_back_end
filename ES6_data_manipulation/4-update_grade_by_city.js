export default function updateStudentGradeByCity(arr, city, Ngrade) {
  return arr
    .filter((obj) => obj.location === city)
    .map((student) => {
      const grade = Ngrade
      .filter((obj) => obj.studentId === student.id)
        .map((i) => i.grade)[0] || 'N/A';
      return { ...student, grade };
    });
}
