import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({})
    const [loading, setLoading] = useState(false)

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
            {room?.title}
            <div className="">
                <div className="flex flex-col gap-6">
                    {/* Header */}
                    {/* Room info */}
                    {/* Calender */}
                </div>
            </div>
        </Container>
    )
};

export default RoomDetails;