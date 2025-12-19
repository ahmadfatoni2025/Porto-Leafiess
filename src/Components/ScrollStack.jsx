// @ts-nocheck
import { useLayoutEffect, useRef, useCallback } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '', style = {} }) => (
    <div
        className={`scroll-stack-card relative w-full my-4 p-4 md:p-8 rounded-[40px] box-border transition-all duration-300 origin-top will-change-transform ${itemClassName}`.trim()}
        style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            ...style
        }}
    >
        {children}
    </div>
);

const ScrollStack = ({
    children,
    className = '',
    itemDistance = 40,
    itemScale = 0.05,
    itemStackDistance = 25,
    stackPosition = '10%',
    scaleEndPosition = '5%',
    baseScale = 0.9,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = true,
    onStackComplete
}) => {
    const scrollerRef = useRef(null);
    const stackCompletedRef = useRef(false);
    const cardsRef = useRef([]);
    const lastTransformsRef = useRef(new Map());
    const isUpdatingRef = useRef(false);

    const calculateProgress = useCallback((scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }, []);

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
            };
        } else {
            const scroller = scrollerRef.current;
            return {
                scrollTop: scroller.scrollTop,
                containerHeight: scroller.clientHeight,
            };
        }
    }, [useWindowScroll]);

    const getElementOffset = useCallback(
        element => {
            if (useWindowScroll) {
                const rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            } else {
                return element.offsetTop;
            }
        },
        [useWindowScroll]
    );

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const endElement = scrollerRef.current?.querySelector('.scroll-stack-end');
        const endElementTop = endElement ? getElementOffset(endElement) : 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = getElementOffset(card);
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < cardsRef.current.length; j++) {
                    const jCardTop = getElementOffset(cardsRef.current[j]);
                    const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) {
                        topCardIndex = j;
                    }
                }

                if (i < topCardIndex) {
                    const depthInStack = topCardIndex - i;
                    blur = Math.max(0, depthInStack * blurAmount);
                }
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const transform = `translate3d(0, ${Math.round(translateY)}px, 0) scale(${Math.round(scale * 1000) / 1000}) rotate(${Math.round(rotation * 100) / 100}deg)`;
            const filter = blur > 0 ? `blur(${Math.round(blur * 10) / 10}px)` : '';

            card.style.transform = transform;
            card.style.filter = filter;

            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        calculateProgress,
        parsePercentage,
        getScrollData,
        getElementOffset
    ]);

    useLayoutEffect(() => {
        const scroller = useWindowScroll ? window : scrollerRef.current;
        if (!scroller) return;

        const container = useWindowScroll ? document.body : scrollerRef.current;
        const cards = Array.from(container.querySelectorAll('.scroll-stack-card'));
        cardsRef.current = cards;

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = 'transform, filter';
            card.style.transformOrigin = 'top center';
        });

        const handleScroll = () => {
            requestAnimationFrame(updateCardTransforms);
        };

        scroller.addEventListener('scroll', handleScroll, { passive: true });
        updateCardTransforms();

        return () => {
            scroller.removeEventListener('scroll', handleScroll);
            stackCompletedRef.current = false;
            cardsRef.current = [];
            isUpdatingRef.current = false;
        };
    }, [itemDistance, useWindowScroll, updateCardTransforms]);

    const containerClassName = useWindowScroll
        ? `relative w-full ${className}`.trim()
        : `relative w-full h-full overflow-y-auto ${className}`.trim();

    return (
        <div className={containerClassName} ref={scrollerRef}>
            <div className="scroll-stack-inner pt-2 px-0 pb-80">
                {children}
                <div className="scroll-stack-end w-full h-px" />
            </div>
        </div>
    );
};

export default ScrollStack;
