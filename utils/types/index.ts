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
  name: string;
  email: string;
  body: string;
}

export interface IUserProps {
  id?: number;
  name: string;
  gender: string;
  email: string;
  status: string;
}
