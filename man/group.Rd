% Auto-generated: do not edit by hand
\name{group}

\alias{group}

\title{Group component}

\description{
Compose elements and components in flex container. For more information, see: https://mantine.dev/core/group/
}

\usage{
group(children=NULL, id=NULL, align=NULL, className=NULL,
direction=NULL, grow=NULL, noWrap=NULL, position=NULL,
spacing=NULL, style=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. Content}

\item{id}{Character. The ID of this component, used to identify dash components in callbacks}

\item{align}{A value equal to: "stretch", "center", "flex-end", "flex-start". Defines align-items css property}

\item{className}{Character. Often used with CSS to style elements with common properties}

\item{direction}{A value equal to: "row", "column". Defines flex-direction property, row for horizontal, column for vertical}

\item{grow}{Logical. Defines flex-grow property for each element, true -> 1, false -> 0}

\item{noWrap}{Logical. Defined flex-wrap property}

\item{position}{A value equal to: "right", "center", "left", "apart". Defines justify-content property}

\item{spacing}{A value equal to: "xs", "sm", "md", "lg", "xl". Space between elements}

\item{style}{Named list. Inline style override}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

