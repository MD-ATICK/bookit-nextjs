export type RoomType = {
    $id: string;
    $collectionId: string;
    $databaseId: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    user_id: string;
    name: string;
    description: string;
    address: string;
    location: string;
    availability: string;
    sqft: string; // If you prefer number, you can change it accordingly
    capacity: string; // Same as above, change to number if needed
    price_per_hour: string; // Same as above
    amenities: string;
    image: string | null;
  }
  