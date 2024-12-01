import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import Card from "./Card";
import { CardType } from "../types";
import { rePositionCards } from "../utils";

type GridProps = {
  data: CardType[];
  setData: (data: CardType[]) => void;
  setIsPositionChanged: (isPositionChanged: boolean) => void;
};

const Grid: React.FC<GridProps> = ({
  data,
  setData,
  setIsPositionChanged,
}: GridProps) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    const updatedPositions = rePositionCards(items);
    setData(updatedPositions);
    setIsPositionChanged(true);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="cats" direction="horizontal">
        {(provided) => (
          <div
            className="grid grid-cols-3 gap-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map((item, index) => (
              <Draggable key={item.type} draggableId={item.type} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card image={item.image} title={item.title} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Grid;
