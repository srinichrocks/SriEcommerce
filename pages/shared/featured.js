import Shipping from "../membersonly/shipping.js"
export default function Featured() {
    const data = [
        {
            name: "Example Shirts",
            description: "Size L, Condition barely used",
            


        },
        {}
    ]
    return (
        <div>
            <div className="row">
                <div className="col-2"/>
                <div className="col-8">
                    <p className="h1">Featured Clothes</p>
                    <hr/>
                </div>
                <div className="col-2"/>
            </div>
            <div className="row mt-4 mx-2 container-fluid">
                    <div className="col-md-3 mt-1">
                        <div className="card text-center shadow rounded h-100">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">Example clothing</h5>
                                <p class="card-text">Example clothing description</p>
                                <a href = "/membersonly/shipping" class="btn btn-primary">Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1">
                        <div className="card text-center shadow rounded h-100">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">Example clothing</h5>
                                <p class="card-text">Example clothing description</p>
                                <a href = "/membersonly/shipping" class="btn btn-primary">Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1">
                        <div className="card text-center shadow rounded h-100">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">Example clothing</h5>
                                <p class="card-text">Example clothing description</p>
                                <a href = "/membersonly/shipping" class="btn btn-primary">Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1">
                        <div className="card text-center shadow rounded h-100">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">Example clothing</h5>
                                <p class="card-text">Example clothing description</p>
                                <a href = "/membersonly/shipping" class="btn btn-primary">Buy</a>
                            </div>
                        </div>
                    </div>
             </div>
        </div>
    )
}