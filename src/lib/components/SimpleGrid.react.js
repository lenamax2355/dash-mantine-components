import React from "react";
import PropTypes from "prop-types";
import { SimpleGrid as MantineSimpleGrid } from "@mantine/core";
import { omit } from "ramda";

/**
 * Responsive grid where each item takes equal amount of space. For more information, see: https://mantine.dev/core/simple-grid/
 */
const SimpleGrid = (props) => {
    return (
        <MantineSimpleGrid {...omit(["setProps", "children"], props)}>
            {props.children}
        </MantineSimpleGrid>
    );
};

SimpleGrid.displayName = "SimpleGrid";

SimpleGrid.defaultProps = {};

SimpleGrid.propTypes = {
    /**
     * Breakpoints data to change items per row and spacing based on max-width
     */
    breakpoints: PropTypes.exact({
        maxWidth: PropTypes.number.isRequired,
        cols: PropTypes.number.isRequired,
        spacing: PropTypes.oneOfType([
            PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
            PropTypes.number,
        ]),
    }),

    /**
     * <Col /> components only
     */
    children: PropTypes.node,

    /**
     * Often used with CSS to style elements with common properties
     */
    className: PropTypes.string,

    /**
     * Default amount of columns, used when none of breakpoints can be applied
     */
    cols: PropTypes.number.isRequired,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
    id: PropTypes.string,

    /**
     * Default spacing between columns, used when none of breakpoints can be applied
     */
    spacing: PropTypes.oneOfType([
        PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
        PropTypes.number,
    ]),

    /**
     * Inline style override
     */
    style: PropTypes.object,
};

export default SimpleGrid;
