"use client"
import { createRoom } from "@/lib/actions/createRoom";
import { RoomType } from "@/types/type";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function AddRoomForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [addRoomData, setAddRoomData] = useState<RoomType>({ name: '', description: "", address: '', location: '', availability: '', sqft: '', capacity: '', price_per_hour: '', amenities: '', image: null });
    const router = useRouter()


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (addRoomData.image && addRoomData.image.size > (50 * 1000)) { // means 50kb
            return toast('you image should be under 50kb size!', {style: {backgroundColor:'red'}})
        }

        setIsLoading(true)

        const formData: FormData = new FormData()
        formData.append('image', addRoomData.image!);
        formData.append('name', addRoomData.name);
        formData.append('description', addRoomData.description);
        formData.append('address', addRoomData.address);
        formData.append('location', addRoomData.location);
        formData.append('availability', addRoomData.availability);
        formData.append('capacity', addRoomData.capacity);
        formData.append('sqft', addRoomData.sqft);
        formData.append('price_per_hour', addRoomData.price_per_hour);
        formData.append('amenities', addRoomData.amenities);

        const data = await createRoom(formData)

        if (data.success) {
            toast('successfully room created', { style: { backgroundColor: 'green' } })
            setAddRoomData({
                name: '',
                description: '',
                address: '',
                location: '',
                availability: '',
                sqft: '',
                capacity: '',
                price_per_hour: '',
                amenities: '',
                image: null,
            });
            router.push('/')
        }

        if (data.error) {
            toast(data.error, { style: { backgroundColor: 'red' } })
        }
        setIsLoading(false)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAddRoomData((prev) => ({ ...prev, [name]: value }))
    }





    return (
        <form onSubmit={handleSubmit}>
            <div className=" py-2 space-y-1">
                <Label>Room Name</Label>
                <Input disabled={isLoading} id="name" name="name" required={true} value={addRoomData.name} onChange={handleInputChange} placeholder="name" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Description</Label>
                <Textarea rows={5} disabled={isLoading} id="description" name="description" required={true} value={addRoomData.description} onChange={(e) => setAddRoomData(prev => ({ ...prev, description: e.target.value }))} placeholder="description" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Square Feet (number)</Label>
                <Input disabled={isLoading} id="sqft" name="sqft" required={true} value={addRoomData.sqft} onChange={handleInputChange} placeholder="sqft" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Capacity (number) </Label>
                <Input disabled={isLoading} id="capacity" name="capacity" required={true} value={addRoomData.capacity} onChange={handleInputChange} placeholder="capacity" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Price Per Hour (number)</Label>
                <Input disabled={isLoading} id="price_per_hour" name="price_per_hour" required={true} value={addRoomData.price_per_hour} onChange={handleInputChange} placeholder="price per hour" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Address</Label>
                <Input disabled={isLoading} id="address" name="address" required={true} value={addRoomData.address} onChange={handleInputChange} placeholder="address" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Location</Label>
                <Input disabled={isLoading} id="location" name="location" required={true} value={addRoomData.location} onChange={handleInputChange} placeholder="location" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Availability</Label>
                <Input disabled={isLoading} id="availability" name="availability" required={true} value={addRoomData.availability} onChange={handleInputChange} placeholder="availability" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Amenities</Label>
                <Input disabled={isLoading} id="amenities" name="amenities" required={true} value={addRoomData.amenities} onChange={handleInputChange} placeholder="amenities" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Image</Label>
                <Input disabled={isLoading} id="image" name="image" onChange={(e) => setAddRoomData(prev => ({ ...prev, image: e.target?.files && e.target.files[0] }))} placeholder="image" type="file" />
            </div>
            <br />
            <Button disabled={isLoading} className=" w-full">{isLoading ? <ClipLoader color="black" size={20} /> : 'Add a room'}</Button>
            <br /> <br />
        </form>
    )
}
