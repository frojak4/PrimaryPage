import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/dashboard"}> Go to dashboard</Link>
    </div>
  );
}
