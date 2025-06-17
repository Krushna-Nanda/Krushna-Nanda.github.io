[Zerodha landing page part 1](https://zerodha.com/)

In your CSS, applying `display: flex;` to `#image img` creates a flex container with the image as its flex item. However, the `justify-content` and `align-items` properties affect the alignment and spacing of flex items within the flex container, not the container itself.

Since your image is the only flex item within the `#image img` container, using `justify-content: space-evenly;` won't have any visible effect because there's only one item to space within the container.

If you want to center the image both horizontally and vertically within its container, `margin: 0 auto;` is sufficient for horizontal centering, as it applies equal margins on the left and right sides of the image, effectively centering it horizontally. To center the image vertically, you can use `padding-top` or `padding-bottom` to add spacing above or below the image, as you've done with `padding-top: 65px;`.

If you remove `display: flex;` from `#image img`, `margin: 0 auto;` won't work for centering horizontally because `margin: auto;` only works on block-level elements, and images are by default inline-level elements. By setting `display: flex;`, you're changing the image to a block-level element, allowing `margin: auto;` to center it horizontally.

To summarize:

- `justify-content` and `align-items` affect flex items within a flex container, not the container itself.
- `margin: 0 auto;` works for horizontal centering only when the element has `display: block;` or `display: flex;`. Without `display: flex;`, you'll need alternative methods for horizontal centering, such as `text-align: center;` for inline-level elements like images.
