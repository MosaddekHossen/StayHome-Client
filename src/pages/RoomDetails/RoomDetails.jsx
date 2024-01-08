import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{`StayHome | ${room?.title}`}</title>
            </Helmet>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <Header room={room} />
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <RoomInfo room={room} />
                        <div className="md:col-span-3 order-first md:order-last mb-10">
                            {/* RoomReservation */}
                            <RoomReservation room={room} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default RoomDetails;