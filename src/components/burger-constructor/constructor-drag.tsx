import styles from './constructor-drag.module.css'
import { useDispatch, useSelector } from '../../utils/hooks';
import { FunctionComponent, useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';

import { moveItem, removeIngredientAction } from '../../services/actions/constructor-action'
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IOrderContainer } from '../../utils/types';

type TDragItemProps = {
    readonly item: IOrderContainer;
    readonly index: number;
}

const DragItem: FunctionComponent<TDragItemProps> = (props) => {
    const { item, index } = props
    const id = item.ingredient._id

    const dispatch = useDispatch()
    const order = useSelector((state) => state.constructorReducer.order)

    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "ingredient-constructor",
        collect(monitor) {
        return {
            handlerId: monitor.getHandlerId(),
        }
        },
        hover(item: any, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = index
            const hoverIndex = item.index
            
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(moveItem(dragIndex, hoverIndex, order));
            item.index = dragIndex
        }
    })
    const [{ isDragging }, drag] = useDrag({
        type: "ingredient-constructor",
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <div className={ styles.drag_div } style={{opacity: opacity} } ref={ref} data-handler-id={handlerId}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ item.ingredient.name }
                price={ item.ingredient.price }
                thumbnail={ item.ingredient.image }
                handleClose={ () => { dispatch(removeIngredientAction(item.key)) } }
            />
        </div>
    )
}

export { DragItem }