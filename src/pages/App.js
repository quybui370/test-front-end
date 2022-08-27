import './App.css';
import {Day} from '../components/Day';
import {WorkoutContainer} from "../components/WorkoutContainer";
import fakeData from '../const/fakeData';
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import {useState} from 'react';

function App() {
    const [state, setState] = useState(fakeData);

    const move = (sourceID, destinationID, sourceIndex, destinationIndex, currentItemID) => {
        // clone state.
        const cloneState = Array.from(state);

        const sourceItem = cloneState.find(item => item.id === parseInt(sourceID));
        const destinationItem = cloneState.find(item => item.id === parseInt(destinationID));
        const sourceItemIndex = cloneState.indexOf(sourceItem);
        const destinationItemIndex = cloneState.indexOf(destinationItem);

        // clone data source.
        const cloneSource = Array.from(sourceItem.workouts);
        const cloneDestination = Array.from(destinationItem.workouts);

        // workout items move in a day.
        if (sourceID === destinationID) {
            // get current item by current id.
            const item = cloneSource.find(item => item.name === currentItemID);
            // get index of current item.
            const index = cloneSource.indexOf(item);
            // delete source item.
            cloneSource.splice(index, 1);
            // move item to destination.
            cloneSource.splice(destinationIndex, 0, item);
            cloneState[sourceItemIndex].workouts = cloneSource;
        }
        // workout items move between different day.
        else {
            // get current item by current id.
            const item = cloneSource.find(item => item.name === currentItemID);
            // get index of current item.
            const index = cloneSource.indexOf(item);
            // move item to destination.
            cloneDestination.splice(destinationIndex, 0, item);
            // delete source item.
            cloneSource.splice(index, 1);
            // save these changes into state.
            cloneState[sourceItemIndex].workouts = cloneSource;
            cloneState[destinationItemIndex].workouts = cloneDestination;
        }

        // update state.
        setState(cloneState);
    }

    const dataGenerator = (lastChar, count) => {
        return {
            itemName: `Exercise ${String.fromCharCode(lastChar.charCodeAt(0) + 1)}`,
            numberExercises: count,
            info: `${count * 10} lb x ${count}`
        }
    }

    const add = (parentIndex, childIndex, lastChar, count) => {
        // clone state.
        const cloneState = Array.from(state);

        // add new workout item.
        const workouts = cloneState[parentIndex].workouts;
        workouts[childIndex].items.push(dataGenerator(lastChar, count));

        // update state.
        setState(cloneState);
    }

    const onDragEnd = (result) => {
        const {source, destination, draggableId} = result;

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        if (source.droppableId && destination.droppableId && draggableId) {
            move(source.droppableId, destination.droppableId, source.index, destination.index, draggableId);
        }
    };

    const onClickAddItem = (event, parentIndex, childIndex, lastChar, count) => {
        event.preventDefault();
        add(parentIndex, childIndex, lastChar, count);
    }

    return (
        <div className='app'>
            <div className='container'>
                <div className='content-wrapper'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {state.map((item, ind) => (
                            <Droppable key={ind} droppableId={`${item.id}`}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <Day key={item.id} dayName={item.dayName} dayNumber={item.dayNumber}>
                                            {item.workouts.map((workout, index) => (
                                                <Draggable
                                                    key={workout.name}
                                                    draggableId={workout.name}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <WorkoutContainer parentIndex={ind}
                                                                              childIndex={index}
                                                                              item={workout}
                                                                              onClickAddItem={onClickAddItem}/>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </Day>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}

export default App;
