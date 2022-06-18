export interface Photo {
  id: number;
  postDate: Date;
  allowsComments: boolean;
  likes: number;
  comments: number;
  userId: number;
  url: string;
  description: string;
}
