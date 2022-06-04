import { signIn } from "next-auth/react";

const GoogleLogin = ({ provider }) => {
  return (
    <button
      className="w-full my-2 py-4 px-2 rounded-lg border shadow-2xl"
      onClick={() => signIn(provider.id)}
    >
      Sign in with {provider.name}
    </button>
  );
};

export default GoogleLogin;
