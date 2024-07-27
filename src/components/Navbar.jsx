"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname() ;
  const router = useRouter() ;
  const loginHandler = () => {
    router.push("/login");
  };
  const link = [
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/contacts",
    },
    {
      title: "Service",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <div>
      <nav className=" bg-red-500 px-6 py-4 flex justify-between items-center ">
        <h6 className=" text-3xl">
          Next <span className=" text-cyan-200">Hero</span>
        </h6>
        <ul className=" flex text-white justify-between items-center space-x-4 ">
          {link.map((links) => (
            <Link key={links.title} href={links.path} className={`${pathName === links.path && "bg-cyan-500 rounded-md px-1" }`} >{links.title}</Link>
          ))}
        </ul>

        <button onClick={loginHandler} className=" text-white rounded-md bg-cyan-400 p-4">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
