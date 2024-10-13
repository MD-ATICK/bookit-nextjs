import { Skeleton } from "./ui/skeleton";


export default function SkeletonRoomAndBooking() {
  return (
    <div className=" w-full space-y-4 p-[1vw]">
      <Skeleton  className=" w-full h-40"/>
      <Skeleton  className=" w-full h-40"/>
      <Skeleton  className=" w-full h-40"/>
      <Skeleton  className=" w-full h-40"/>
    </div>
  )
}
