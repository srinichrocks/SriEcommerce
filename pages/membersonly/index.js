import react from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import MemNavbar from "./mem-navbar";
import Featured from "../shared/featured";
import { useUser } from '@auth0/nextjs-auth0'


export default function Members() {
    const {user, error, isLoading} = useUser();
    // console.log(user)
    return (
        <div className="text-center">
            <MemNavbar/>
            <p className="h3 mt-3 text-info">Welcome {user.name}! Check out some of our clothing below</p>
            <Featured/>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();