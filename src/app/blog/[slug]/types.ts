export interface IPostPageProps {
  params: {
    slug: string;
  }
}

export interface IProps {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}
