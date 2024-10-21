import Skeleton from "@/components/Skeleton";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Input from "@/components/ui/Input";
import React from "react";

const Geg = () => {
  return (
    <div className="container flex flex-col gap-3 p-5">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="dark">dark</Button>
        <Button variant="light">light</Button>
        <Button variant="success">green</Button>
        <Button variant="danger">red</Button>
        <Button variant="warning">yellow</Button>
        <Button variant="outline">outline</Button>

        <Button size="xs">xs</Button>
        <Button size="sm">sm</Button>
        <Button size="md">md</Button>
        <Button size="lg">lg</Button>
        <Button size="xl">xl</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <IconButton icon="github" />
        <IconButton icon="cart" />
        <IconButton icon="close" />
        <IconButton icon="facebook" />
        <IconButton icon="grid" />
        <IconButton icon="hamburger" />
        <IconButton icon="instagram" />
        <IconButton icon="delete" />
        <IconButton icon="instagram" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton height={12} width={100} />
        <Skeleton height={23} width="100%" />
        <Skeleton height={45} className="min-w-5" />
      </div>
      <div className="flex flex-col gap-3">
        <Input type="checkbox" label="Text" />
        <Input type="text" placeholder="test" />
        <Input type="text" />
        <Input type="radio" />
        <Input type="date" />
        <Input type="month" />
      </div>
    </div>
  );
};

export default Geg;
