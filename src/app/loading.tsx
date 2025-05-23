import { Spinner } from "@heroui/spinner";
import Image from "next/image";

export default function loading() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div>
        <Image src="/SP-logo.png" alt="logo" width={200} height={70} />
        <div className="flex justify-center gap-4">
          <Spinner size="sm" color="success" />
          <Spinner size="sm" color="secondary" />
          <Spinner size="sm" color="success" />
        </div>
      </div>
    </div>
  );
}
