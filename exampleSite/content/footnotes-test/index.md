+++
date = '2026-06-01T10:10:30-05:00'
title = 'Floating Footnotes Test'
tags = ['footnotes', 'demo']
+++

## First section

This page is designed to test the floating footnotes feature. Resize your browser to see footnotes float in the aside column at ≥768px and stack below content on narrower screens.

Here is the first footnote reference[^first] embedded in a short paragraph.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Second section

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Here is another footnote[^second] and yet another one[^third] in quick succession to test stacking behavior in the aside column.

Further reading suggests that footnote positioning must account for overlapping[^fourth] when multiple references appear close together on the page.

## Third section with a long paragraph

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin purus. This is a good spot for another reference[^fifth] to see how it aligns with a deep paragraph. Phasellus at dui in ligula mollis ultricies. Integer placerat tristique nisl. Praesent augue. Fusce commodo. Vestibulum convallis, lorem a tempus semper, dui dui sodales leo, nec blandit nunc risus eget nunc. Vestibulum imperdiet mattis neque. Aenean vitae risus at odio mollis hendrerit. Sed blandit ligula non lectus. Cras lacinia magna vitae arcu. Sed sagittis.

## Fourth section — many footnotes clustered

Mauris dictum. Vestibulum lacinia arcu eget nulla[^sixth]. Class aptent taciti sociosqu ad litora torquent per conubia nostra[^seventh], per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc[^eighth]. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor[^ninth]. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis[^tenth], luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.

## Fifth section — no footnotes here

This section intentionally has no footnotes. It exists to check that nothing breaks when `.Content` contains a section without any footnote references.

Sed blandit ligula non lectus. Cras lacinia magna vitae arcu. Sed sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut libero. Vivamus euismod.

[^first]: This footnote aligns with the first section. Its text is long enough to demonstrate how the aside handles multi-line footnote content.

[^second]: A medium-length footnote for the second section.

[^third]: This footnote appears right after the second one, testing vertical stacking and overlap prevention in the aside column.

[^fourth]: Footnotes that are close together in the text should not overlap. The algorithm keeps track of `bottomOfLastElem` and pushes subsequent footnotes down if they would collide.

[^fifth]: Deep in a long paragraph — tests whether alignment targets the paragraph container rather than just the superscript link.

[^sixth]: First in a dense cluster of five footnotes. This tests the positioning algorithm under load.

[^seventh]: Second in the cluster. Should stack directly below the sixth.

[^eighth]: Third in the cluster. Should be positioned below the seventh without overlapping.

[^ninth]: Fourth in the cluster. The aside column should show these in proper vertical order.

[^tenth]: Fifth and final in the dense cluster. The bottom of this footnote should be near the last paragraph of the fourth section.
