let nodes = [];
let rects = [];
figma.currentPage.selection.forEach((n, index) => {
    const t = n.absoluteTransform;
    let r = figma.createRectangle();
    r.name = `#-block-${index}`;
    r.x = t[0][2];
    r.y = t[1][2];
    r.fills = [{
            type: 'SOLID',
            color: { r: 1, g: 1, b: 1 }
        }];
    r.resize(n.width, n.height);
    r.blendMode = "SATURATION";
    nodes.push(r);
});
figma.closePlugin();
