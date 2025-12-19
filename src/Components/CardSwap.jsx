// @ts-nocheck
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Card = ({ children, className = '', style = {} }) => (
    <div
        className={`w-full h-full rounded-[3rem] p-1 overflow-hidden ${className}`}
        style={style}
    >
        {children}
    </div>
);

const CardSwap = ({
    children,
    cardDistance = 20,
    verticalDistance = 15,
    delay = 5000,
    pauseOnHover = true
}) => {
    const cards = React.Children.toArray(children);
    const [order, setOrder] = useState(cards.map((_, i) => i));
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);

    const swap = useCallback(() => {
        setOrder((prevOrder) => {
            const newOrder = [...prevOrder];
            const first = newOrder.shift();
            newOrder.push(first);
            return newOrder;
        });
    }, []);

    useEffect(() => {
        if (pauseOnHover && isHovered) {
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }

        timerRef.current = setInterval(swap, delay);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [swap, delay, pauseOnHover, isHovered]);

    return (
        <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="popLayout">
                {order.map((cardIndex, i) => {
                    const isFront = i === 0;
                    const isBack = i === cards.length - 1;

                    // Calculate properties based on position in stack
                    // i=0 is front, i=1 is middle, i=2 is back
                    const scale = 1 - (i * 0.05);
                    const opacity = 1 - (i * 0.3);
                    const zIndex = cards.length - i;
                    const yOffset = i * verticalDistance;
                    const zOffset = -i * cardDistance;

                    return (
                        <motion.div
                            key={cardIndex}
                            style={{
                                zIndex,
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                transformOrigin: 'bottom center',
                            }}
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                y: 50,
                                rotateX: -10
                            }}
                            animate={{
                                opacity: opacity > 0 ? opacity : 0,
                                scale,
                                y: yOffset,
                                z: zOffset,
                                rotateX: 0,
                                filter: isFront ? 'blur(0px)' : `blur(${i * 2}px)`
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.1,
                                y: -100,
                                rotateX: 10,
                                transition: { duration: 0.4 }
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            {cards[cardIndex]}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default CardSwap;
