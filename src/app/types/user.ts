export interface UserProps {
  userId: string;
  nickname: string;
  profileImg: string | null;
}

export interface YouProps extends UserProps {
  signupDate: string;
  followers: { [key: string]: string }[];
}
