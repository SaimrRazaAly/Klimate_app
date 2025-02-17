import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface LocationErrorProps {
  getLocation: () => void;
  LocationError: string;
}

const LocatoinError: React.FC<LocationErrorProps> = ({ getLocation, LocationError }) => {
  
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        <p>{LocationError}</p>
        <Button variant="outline" onClick={getLocation} className="w-fit">
          <MapPin className="mr-2 h-4 w-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default LocatoinError;
