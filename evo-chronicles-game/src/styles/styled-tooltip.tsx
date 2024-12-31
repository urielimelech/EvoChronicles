import { styled } from "styled-components";
import { colors } from "../assets/colors";

export const StyledTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  z-index: 1;
  opacity: 0.9;
`;