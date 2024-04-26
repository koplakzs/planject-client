"use client";
import React, { useEffect, useState } from "react";
import { KanbanCardProps } from "./kanbanCard";
import {
  DndContext,
  DragCancelEvent,
  DragEndEvent,
  rectIntersection,
} from "@dnd-kit/core";
import KanbanLane, { Cards } from "./kanbanLane";

const KanbanBoard = () => {
  const [completedItems, setCompletedItems] = useState<Cards[]>([]);
  const [inProgressItems, setInProgressItems] = useState<Cards[]>([]);
  const [tasksItems, setTasksItems] = useState<Cards[]>([
    {
      title: "Pengerjaan Api dan fix trouble dari ridho ganteng",
    },
    {
      title: "aaa",
    },
    {
      title: "yaaaaaaaaaa",
    },
  ]);

  const handleDragEnd = (e: DragEndEvent) => {
    const container = e.over?.id;
    const title: string = e.active.data.current?.title ?? "";
    const index: number = e.active.data.current?.index ?? 0;
    const parent: string = e.active.data.current?.parent ?? "ToDo";

    if (!container || parent === container) {
      return;
    }

    switch (container) {
      case "Tasks":
        setTasksItems([...tasksItems, { title }]);
        break;
      case "Completed":
        setCompletedItems([...completedItems, { title }]);
        break;
      default:
        setInProgressItems([...inProgressItems, { title }]);
        break;
    }

    switch (parent) {
      case "Tasks":
        setTasksItems([
          ...tasksItems.slice(0, index),
          ...tasksItems.slice(index + 1),
        ]);
        break;
      case "Completed":
        setCompletedItems([
          ...completedItems.slice(0, index),
          ...completedItems.slice(index + 1),
        ]);
        break;
      default:
        setInProgressItems([
          ...inProgressItems.slice(0, index),
          ...inProgressItems.slice(index + 1),
        ]);
        break;
    }
  };

  useEffect(() => {
    console.log("data", {
      task: tasksItems,
      progress: inProgressItems,
      completed: completedItems,
    });
  }, [tasksItems, inProgressItems, completedItems]);
  return (
    <DndContext collisionDetection={rectIntersection} onDragEnd={handleDragEnd}>
      <section className="flex justify-between w-full min-h-96pp">
        <KanbanLane title="Tasks" items={tasksItems} />
        <KanbanLane title="In Progress" items={inProgressItems} />
        <KanbanLane title="Completed" items={completedItems} />
      </section>
    </DndContext>
  );
};

export default KanbanBoard;
