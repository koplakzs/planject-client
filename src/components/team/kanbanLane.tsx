"use client";
import React from "react";
import KanbanCard, { KanbanCardProps } from "./kanbanCard";
import { useDraggable, useDroppable } from "@dnd-kit/core";

export interface Cards {
  title: string;
}

interface KanbanLaneProps {
  title: string;
  items: Cards[];
}

const KanbanLane = ({ title, items }: KanbanLaneProps) => {
  const { setNodeRef } = useDraggable({
    id: title,
  });
  const { setNodeRef: setDroppableRef } = useDroppable({
    id: title,
  });

  return (
    <section
      className="flex flex-col py-5 px-3 w-full min-h-full border-x-2"
      ref={setDroppableRef}
    >
      <p className="font-semibold text-xl text-center mb-8"> {title} </p>

      <div className="flex flex-col gap-y-5" ref={setNodeRef}>
        {items.map(({ title: cardTitle }, key) => (
          <KanbanCard title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </div>
    </section>
  );
};

export default KanbanLane;
