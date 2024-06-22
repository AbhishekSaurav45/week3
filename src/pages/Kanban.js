import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Kanban = () => {
  const [tasks, setTasks] = useState({
    todo: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
    inProgress: [{ id: '3', content: 'Task 3' }],
    done: [{ id: '4', content: 'Task 4' }],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const sourceItems = [...sourceColumn];
    const destItems = [...destColumn];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.entries(tasks).map(([columnId, columnTasks]) => (
        <Droppable key={columnId} droppableId={columnId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h2>{columnId}</h2>
              {columnTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default Kanban;
