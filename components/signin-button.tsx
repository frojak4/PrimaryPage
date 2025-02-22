import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(undefined, { redirectTo: "/dashboard" });
      }}
    >
      <button className="btn btn-primary text-primary-content" type="submit">
        Sign In
      </button>
    </form>
  );
}
