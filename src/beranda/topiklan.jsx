import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import bannerimage from "../assets/image/Banner1.png";

export default function TopIklan() {
  return (
    <div className="flex items-center justify-center pt-0 pb-0">
      <Card className="flex-row w-screen max-h-[352px]">
        <img
          src={bannerimage}
          alt="image"
          className="w-full h-full object-cover"
          style={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
            border: "none"
          }}
        />
      </Card>
    </div>
  );
}
