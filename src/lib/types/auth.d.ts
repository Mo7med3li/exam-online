declare type AppUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerfied: boolean;
};
declare type LoginResponse = {
  token: string;
  user: AppUser;
};
