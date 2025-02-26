import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="btn btn-warning text-warning-content" type="submit">
        Sign Out
      </button>
    </form>
  );
}
