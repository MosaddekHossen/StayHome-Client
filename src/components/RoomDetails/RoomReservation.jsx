import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservation = ({ room }) => {
    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0])

    const totalPrice = totalDays * room?.price;

    return (
        <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <h3 className="text-2xl font-semibold">${room?.price}</h3>
                <p className="font-light text-neutral-600">Night</p>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender />
            </div>
            <hr />
            <div className="p-4">
                <Button label={"Reserve"} />
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <h3 className="">Total:</h3>
                <h3 className="">${totalPrice}</h3>
            </div>
        </div>
    );
};

export default RoomReservation;