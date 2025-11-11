import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LiquidGlassCardProps {
    children: React.ReactNode;
    className?: string;
    glowIntensity?: 'none' | 'sm' | 'md' | 'lg';
}

export const LiquidGlassCard = ({
    children,
    className = '',
    glowIntensity = 'md',
}: LiquidGlassCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: -100, y: -100 });
    };

    const glowSizes = {
        none: 0,
        sm: 150,
        md: 250,
        lg: 350,
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn(
                'relative w-full h-full p-6 bg-white/5 border border-white/10 rounded-3xl shadow-2xl',
                'backdrop-blur-xl overflow-hidden',
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ willChange: 'transform' }} // Performance optimization
        >
            {/* Dynamic Glow Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(${glowSizes[glowIntensity]}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`,
                    transition: 'background 0.2s ease-out', // Smooth transition for the glow
                }}
            />

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'url(/noise.png)' }}
            ></div>

            {/* Content */}
            <div className="relative z-20">
                {children}
            </div>
        </motion.div>
    );
};
