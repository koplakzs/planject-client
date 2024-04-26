"use client";

import React from "react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export interface KanbanCardProps {
  title: string;
  index: number;
  parent: string;
}

const KanbanCard = ({ title, index, parent }: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="py-4 px-5"
    >
      <CardDescription className="text-center font-semibold">
        {title}
      </CardDescription>
    </Card>
  );
};

export default KanbanCard;
