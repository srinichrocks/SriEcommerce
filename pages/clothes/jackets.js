import MemNavbar from "../membersonly/mem-navbar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Jackets() {
    return (
        <div className="text-center">
            <MemNavbar/>
            <div className="row mt-2">
                <div className="col-2"/>
                <div className="col-8">
                    <p className="h1">Jackets</p>
                    <hr/>
                </div>
                <div className="col-2"/>
            </div>
            <div className="row mt-2 mx-2 container-fluid">
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2 mx-2 container-fluid">
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card text-center shadow rounded h-100">
                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Jacket</h5>
                            <p class="card-text">Jacket description</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();