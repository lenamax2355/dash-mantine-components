# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
Card with context styles for Image and Divider components. For more information, see: https://mantine.dev/core/card/

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Card content.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- padding (optional):
    Predefined padding value from theme.spacing or number for padding
    in px.

- radius (optional):
    Predefined border-radius value from theme.radius or number for
    border-radius in px.

- shadow (optional):
    Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or
    any valid css box-shadow property.

- withBorder (boolean; optional):
    Adds 1px border with theme.colors.gray[2] color in light color
    scheme and theme.colors.dark[6] in dark color scheme."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, padding=Component.UNDEFINED, radius=Component.UNDEFINED, shadow=Component.UNDEFINED, withBorder=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'padding', 'radius', 'shadow', 'withBorder']
        self._type = 'Card'
        self._namespace = 'dash_mantine_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'padding', 'radius', 'shadow', 'withBorder']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Card, self).__init__(children=children, **args)
