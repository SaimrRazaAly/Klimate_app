import {  RefreshCcw } from "lucide-react";
import { Button } from "../components/ui/button";
import { useGeoLocation } from "../Hooks/use_GeoLocation";
import WeatherSkeleton from "../components/Loading_Skeleton";
import LocatoinError from "../components/LocatoinError"

const DashBoard = () => {
  const { coordinates, error:LocationError, isLoading:LocationLoading, getLocation } = useGeoLocation();
  console.log(coordinates);

  const handleRefresh = () => {
    getLocation();

    if (coordinates) {
      // reolad the weather data
    }
    if(LocationLoading){
      return <WeatherSkeleton/>
    }

    if (LocationError) {
      return (
        <LocatoinError getLocation={getLocation} LocationError={LocationError}/>
      );
    }
    if (!coordinates) {
      return (
        <LocatoinError LocationErrorStatus={false}/>
      );
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-blod tracking-tight">My Location</h1>
        <Button variant={"outline"} size={"icon"} onClick={handleRefresh}>
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DashBoard;
