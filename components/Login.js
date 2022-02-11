import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="relative bg-black text-white">
      <h1>Login screen</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src="/trilamanila.png"
          alt="logo"
          height={150}
          width={150}
        />

        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-red-600 p-4 font-bold"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1627645835237-0743e52b991f"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
