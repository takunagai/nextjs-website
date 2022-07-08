import Link from "next/link";
import { FlagIcon } from "@heroicons/react/outline";

const TopmostNotificationBar = () => {
  return (
    <aside className="bg-gradient-to-r from-purple-500 to-pink-500 py-3">
      <div className="flex flex-col justify-center text-center md:flex-row">
        <FlagIcon className="inline-block h-7 w-7 text-white" />
        <p className="mx-3 inline-block text-lg font-bold">
          目立たせたいお知らせが入ります！
        </p>
        <span className="inline-block rounded-full bg-white py-1.5 px-3 text-xs font-bold text-pink-500">
          <Link href="./about">Read Here</Link>
        </span>
      </div>
    </aside>
  );
};

export default TopmostNotificationBar;
