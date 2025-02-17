# AUTO GENERATED FILE - DO NOT EDIT

progress <- function(id=NULL, className=NULL, color=NULL, radius=NULL, sections=NULL, size=NULL, striped=NULL, value=NULL) {
    
    props <- list(id=id, className=className, color=color, radius=radius, sections=sections, size=size, striped=striped, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Progress',
        namespace = 'dash_mantine_components',
        propNames = c('id', 'className', 'color', 'radius', 'sections', 'size', 'striped', 'value'),
        package = 'dashMantineComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
