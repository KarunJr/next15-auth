import { auth } from "@/auth";

// We have also make the function useCurrentUser inside hooks folder. So whats the difference?
// in useCurrentUser we have used useSession provided by next-auth/react but here in this fn we are using the session imported from the auth.ts for server actions which is located in the root.
export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const currentUserRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
