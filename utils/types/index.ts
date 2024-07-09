export interface IBlogsProps {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}
export interface ICommentProps {
  id: string;
  post_id: string;
  user: {
    id: string;
    username: string;
    fullName: string;
  };
  email: string;
  body: string;
}

export interface IUserProps {
  id?: number;
  name: string;
  message: string;
  email: string;
}
