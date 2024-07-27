import Link from "next/link";

const Contactinfo = () => {
    return (
        <div>
            <Link href={"/contacts/mission"}>Mission</Link>
            <Link href={"/contacts/vision"}>Vision</Link>
        </div>
    );
};

export default Contactinfo;