"use client"
import {Card, CardBody} from "@nextui-org/react";

export default function CardDemo({ children } : {children: React.ReactNode}) {
  return (
    <Card className="w-[50%] m-auto mt-[-50px] mb-[10px] shadow-5x1 dark z-10 flex gap-[0px]" style={{ 
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px"
     }}>
      <CardBody className="flex flex-row items-start gap-[10px]">
        {children}
      </CardBody>
    </Card>
  );
}