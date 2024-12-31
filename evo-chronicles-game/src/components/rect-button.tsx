import React, { useState } from "react";
import { StyledRectButton } from "../styles/styled-rect-button";
import { StyledTooltip } from "../styles/styled-tooltip";

interface RectButtonProps {
    onClick: () => void;
    text: string;
    description?: string;
    disabled?: boolean;
}

export const RectButton: React.FC<RectButtonProps> = ({ onClick, text, description, disabled }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        if (description)
            setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <StyledRectButton
                onClick={onClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                disabled={disabled}
            >
                {text}
            </StyledRectButton>
            {showTooltip &&
                <StyledTooltip>
                    {description}
                </StyledTooltip>}
        </div>
    )
}