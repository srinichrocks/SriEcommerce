import Featured from "../shared/featured";
import NonNavbar from "./non-navbar";

export default function NonMembers() {
    return (
        <div className="text-center">
            <NonNavbar/>
            <div className="row text-center mt-3">
                <div className="col-3"/>
                <div className="col-6">
                    <p className="h4 text-danger">You are currently not logged in</p>
                </div>
                <div className="col-3"/>
            </div>
            <Featured/>
            
        </div>
    )
}