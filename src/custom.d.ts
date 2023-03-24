// declare module "*.svg" {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }

declare module "*.svg" {
  const content: any;
  export default content;
}

type UserBio = {
  bio: string;
  login: string;
  avatar_url: string;
  created_at: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  twitter_username: string;
  blog: string;
  company: string;
};

type ErrorProps = {
  keyCode: number;
};
