import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";

type NavbarProps = {
  nickname: string;
};

export default function Navbar({ nickname }: NavbarProps) {
  const { logout } = useAuth();
  const firstLetter = nickname.charAt(0).toUpperCase();

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="fixed navbar bg-base-100 border-b max-w-6xl z-20 w-full">
          <div className="flex justify-between w-full">
            <a
              href="/"
              className="py-2 px-4 rounded-lg hover:bg-base-200 w-fit"
            >
              <div className="flex items-center gap-2">
                <img className="w-10" src="/images/icon.png" alt="solidithai" />
                <strong>SolidiThai</strong>
              </div>
            </a>

            <div className="hidden sm:flex items-center gap-4">
              <span>Welcome, </span>
              <label className="avatar placeholder">
                <div className="bg-primary text-neutral-content rounded-full w-8">
                  <span className="text-xl">{firstLetter}</span>
                </div>
              </label>
              <span className="text-sm md:text-base font-semibold">
                {nickname}
              </span>
              <div className="divider divider-horizontal" />
              <ThemeSwitcher />
              <Button
                text={"Logout"}
                className="btn btn-sm btn-ghost"
                rightIcon={<IoIosLogOut />}
                onClick={logout}
              />
            </div>

            <div className="sm:hidden">
              <label
                htmlFor="my-drawer-4"
                className="btn btn-square btn-ghost"
                aria-label="Open Sidebar"
              >
                <div className="bg-primary text-neutral-content rounded-full w-8">
                  <span className="text-xl">{firstLetter}</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <span className="font-bold">{nickname}</span>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <span>Theme</span>
              <ThemeSwitcher />
            </div>
          </li>
          <li>
            <Button
              text={"Logout"}
              className="btn btn-sm btn-ghost w-full text-error"
              rightIcon={<IoIosLogOut />}
              onClick={logout}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
