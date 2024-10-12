import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SingleRoomForm() {
    return (
        <div className="flex flex-col p-[2vw] py-[4vw] gap-6">
            <div className=" flex flex-col md:flex-row items-center gap-3">
                <Input
                    type="date"
                    id="check_in_date"
                    name="check_in_date"
                />
                <Input
                    type="time"
                    id="check_in_time"
                    name="check_in_time"
                />
            </div>
            <div className=" flex flex-col md:flex-row items-center gap-3">
                <Input
                    type="date"
                    id="check_out_date"
                    name="check_out_date"
                />
                <Input
                    type="time"
                    id="check_out_time"
                    name="check_out_time"
                />
            </div>
            <Button className=" mt-[1vw]">Book A Room</Button>
        </div>
    )
}
