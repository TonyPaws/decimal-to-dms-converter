# Decimal to DMS Converter

This webpage allows you to convert decimal coordinates into Degrees, Minutes, Seconds (DMS) format with their respective cardinal directions. This is especially useful when you need to translate coordinates from applications like Google Maps to a DMS format for various purposes.

The conversion takes a decimal coordinate string (latitude and longitude pair) and transforms it into a readable DMS format, complete with cardinal directions, making it easy to use without splitting or adjusting the coordinates manually.

This tool was created from a specific use-case where copying Google Maps coordinates as a string of decimal values required manual work—splitting the string into two parts and pasting them into separate fields, then converting and copying each result individually. This process was tedious, so this tool aims to streamline the workflow.

## Usage Example

If you input `51.37958351141102, -2.366418854124115` or `(51.3794716, -2.3589439)`, this tool will convert it into `51° 22' 46.0992'' N, 2° 21' 32.1984'' W`.

## Cardinal Directions

- The latitude will be suffixed with **N** (for positive latitudes) or **S** (for negative latitudes).
- The longitude will be suffixed with **E** (for positive longitudes) or **W** (for negative longitudes).

## Aren't there many converters like this?

Yes, but most converters have a limitation: they often require you to split the coordinate string into separate values for latitude and longitude, paste them into different input boxes, and then manually copy two separate outputs. This tool avoids all that extra work by allowing you to paste the full string at once and producing a single DMS output that is easy to copy.

Originally, this tool was a small CLI converter, but recognizing the benefit of using it on mobile devices, it has been adapted into this hosted web version for convenience and accessibility.
