"use client"

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const Page = () => {
  const user = useCurrentUser();

  return <UserInfo user={user} label="Client Component" />;
};

export default Page;
