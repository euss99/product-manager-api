import { User } from "@/context/user/domain/entities/User";

interface UserDTO {
  id: User["id"];
  name: string;
  email: string;
  password: string;
  birthday: Date;
}

export default UserDTO;