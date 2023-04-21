import React, { useContext } from "react";
import AdminHeader from "./AdminHeader";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { CarList } from "../../contexts/AdminContexts";

export default function Admin(){
    const { cars } = useContext(CarList);
    // console.log(cars);
    return <div>
        <AdminHeader/>
        <div>
            <div className="admin-body-admin">
                <div className="welcome-message-admin">
                    <h1>Hello Admin...</h1>
                </div>
                <div className="cars-container">
                    <h3 className="cars-heading-admin">Cars</h3>
                    <div className="add-car-btn-admin">
                        <Link to={"addcar"}>
                            <button className="addCar-admin">Add Car</button>
                        </Link>
                    </div>
                    <div className="car-cards-container-admin">
                        {
                            cars.map(car => {
                                return <Cars key={car._id} car={car}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}