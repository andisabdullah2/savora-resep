import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline"; 
   
  import bannerimage from "../assets/image/Banner1.png"
  export default function TopIklan() {
    return (
      <div className="flex items-center justify-center pt-12 pb-12">
        <Card className="flex-row w-full max-w-[65rem] max-h-[12rem]">
          <img
              src={bannerimage}
              alt="image"
              className="w-full h-full object-cover"
            />
        </Card>
      </div>
    );
  }
  