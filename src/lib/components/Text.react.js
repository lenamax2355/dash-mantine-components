import React from "react";
import PropTypes from "prop-types";
import { omit } from "ramda";
import { Text as MantineText } from "@mantine/core";

/**
 * Render text and links with theme styles. For more information, see: https://mantine.dev/core/text/
 */
const Text = (props) => {
    return (
        <MantineText {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineText>
    );
};

Text.displayName = "Text";

Text.defaultProps = {};

Text.propTypes = {
    /**
     * Sets text-align css property
     */
    align: PropTypes.oneOf(["left", "right", "center"]),

    /**
     * Primary content
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Text color from theme
     */
    color: PropTypes.oneOfType([
        PropTypes.oneOf([
            "dark",
            "gray",
            "red",
            "pink",
            "grape",
            "violet",
            "indigo",
            "blue",
            "cyan",
            "teal",
            "green",
            "lime",
            "yellow",
            "orange",
        ]),
        PropTypes.oneOf(["dimmed"]),
    ]),

    /**
     * Controls gradient settings in gradient variant only
     */
    gradient: PropTypes.exact({
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        deg: PropTypes.number,
    }),

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Inherit font properties from parent element
     */
    inherit: PropTypes.bool,

    /**
     * Sets line-height to 1 for centering
     */
    inline: PropTypes.bool,

    /**
     * CSS -webkit-line-clamp property
     */
    lineClamp: PropTypes.number,

    /**
     * Predefined font-size from theme.fontSizes
     */
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

    /**
     * Sets text-transform css property
     */
    transform: PropTypes.oneOf(["capitalize", "uppercase", "lowercase"]),

    /**
     * Link or text variant
     */
    variant: PropTypes.oneOf(["link", "gradient", "text"]),

    /**
     * Sets font-weight css property
     */
    weight: PropTypes.oneOfType([
        PropTypes.oneOf([
            "normal",
            "bold",
            "bolder",
            "lighter",
            "initial",
            "inherit",
        ]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default Text;
