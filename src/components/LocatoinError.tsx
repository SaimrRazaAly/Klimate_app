import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface LocationErrorProps {
  getLocation?: () => void;
  LocationError?: string;
  LocationErrorStatus?: boolean;
}

const LocatoinError: React.FC<LocationErrorProps> = ({
  getLocation,
  LocationError,
  LocationErrorStatus,
}) => {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      {LocationErrorStatus ? <AlertTitle>Location Error</AlertTitle> : <></>}

      <AlertDescription className="flex flex-col gap-4">
        <p>{LocationErrorStatus ?  LocationError : "Please enable location access to see your local weather"}</p>
        <Button variant="outline" onClick={getLocation} className="w-fit">
          <MapPin className="mr-2 h-4 w-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default LocatoinError;
