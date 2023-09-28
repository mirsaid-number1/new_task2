export type EmployeeList = Array<Employee>;

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  isActive: boolean;
  profileImg: string;
};
export default EmployeeList;
